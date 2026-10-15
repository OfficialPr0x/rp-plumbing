'use client';

import { useRef, useState, type FormEvent } from 'react';
import { rpAreas, rpEmail, rpPhone } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const jobs = [
  { value: 'Plumbing repair', title: 'A tap, a toilet, a frozen line', detail: 'The ordinary plumbing call.' },
  { value: 'Drain cleaning', title: 'The water will not go down', detail: 'Slow, blocked, or leaking from the drain.' },
  { value: 'Hot water tank', title: 'No hot water', detail: 'A repair, or the tank is finished.' },
  { value: 'Poly B replacement', title: 'Poly B has to come out', detail: 'Grey pipe out. PEX in.' },
  { value: 'Gas fitting', title: 'Gas', detail: 'A heater, a hookup, or a leak you already reported.' },
  { value: 'Other project', title: 'Something else', detail: 'A renovation, or a job off the list.' },
] as const;

const timings = [
  { value: 'Urgent — need assistance now', title: 'Now' },
  { value: 'As soon as available', title: 'This week' },
  { value: 'Planning a future project', title: 'Planning it' },
] as const;

const prompts = ["Where's the house?", "What's going on?", 'How does Richard reach you?'] as const;
const stepLabels = ['Town', 'The job', 'Your number'] as const;

function splitName(value: string) {
  const parts = value.trim().split(/\s+/);
  return { firstName: parts[0] ?? '', lastName: parts.slice(1).join(' ') };
}

export function RpRequestForm({ town = 'Vernon' }: { town?: string }) {
  const mountedAt = useRef(Date.now());
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const towns = [...rpAreas.map((area) => area.name), 'Other North Okanagan'];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;
    const data = new FormData(event.currentTarget);
    const { firstName, lastName } = splitName(String(data.get('fullName') ?? ''));
    if (!lastName) {
      setNameError('Add a last name so Richard knows who to ask for.');
      setFormError(null);
      setStep(2);
      return;
    }

    setStatus('submitting');
    setNameError(null);
    setFormError(null);

    const job = String(data.get('job') ?? '').trim();
    const timing = String(data.get('timing') ?? '').trim();
    const place = String(data.get('town') ?? '').trim();
    const notes = String(data.get('notes') ?? '').trim();

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: String(data.get('email') ?? ''),
          phone: String(data.get('phone') ?? ''),
          town: place,
          job,
          timing,
          notes,
          company: String(data.get('company') ?? ''),
          elapsedMs: Date.now() - mountedAt.current,
        }),
      });
      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const parsed = body as { error?: string } | null;
        setFormError(parsed?.error ?? 'Check the fields and try again.');
        setStatus('error');
        setStep(2);
        return;
      }
      setStatus('success');
    } catch {
      setFormError(`The form did not send. Call ${rpPhone.display}.`);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rp-form rp-success" role="status">
        <h3>Request received.</h3>
        <p>
          Richard has the request. If water is moving or you smell gas, call now.
        </p>
        <a className="rp-btn rp-btn-navy" href={rpPhone.href}>
          Call {rpPhone.display}
        </a>
      </div>
    );
  }

  return (
    <form className="rp-form" onSubmit={onSubmit} noValidate>
      <ol className="rp-step-rail" aria-label="Request steps">
        {stepLabels.map((label, index) => (
          <li key={label} data-state={index === step ? 'now' : index < step ? 'done' : 'later'}>
            <button type="button" onClick={() => index < step && setStep(index)} disabled={index > step}>
              {label}
            </button>
          </li>
        ))}
      </ol>
      <h3>{prompts[step]}</h3>
      <label className="rp-sr">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div hidden={step !== 0}>
        <p className="rp-note">Pick the town. He already drives all three.</p>
        <fieldset className="rp-choices">
          <legend className="rp-sr">Town</legend>
          {towns.map((name) => (
            <label key={name} className="rp-choice">
              <input type="radio" name="town" value={name} defaultChecked={name === town} required />
              <strong>{name}</strong>
            </label>
          ))}
        </fieldset>
      </div>

      <div hidden={step !== 1}>
        <p className="rp-note">If you smell gas, leave and call the utility before this.</p>
        <fieldset className="rp-choices">
          <legend className="rp-sr">What you need</legend>
          {jobs.map((job) => (
            <label key={job.value} className="rp-choice">
              <input type="radio" name="job" value={job.value} defaultChecked={job.value === 'Plumbing repair'} required />
              <strong>{job.title}</strong>
              <em>{job.detail}</em>
            </label>
          ))}
        </fieldset>
        <fieldset className="rp-choices rp-choices-3">
          <legend className="rp-sr">How soon</legend>
          {timings.map((item) => (
            <label key={item.value} className="rp-choice">
              <input
                type="radio"
                name="timing"
                value={item.value}
                defaultChecked={item.value === 'As soon as available'}
                required
              />
              <strong>{item.title}</strong>
            </label>
          ))}
        </fieldset>
      </div>

      <div hidden={step !== 2}>
        <p className="rp-note">A first and last name, and a phone that gets answered.</p>
        <div className="rp-fields">
          <label>
            Name
            <input name="fullName" autoComplete="name" placeholder="First and last name" required={step === 2} />
            {nameError ? <span className="rp-error">{nameError}</span> : null}
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" placeholder="(250) 555-0100" required={step === 2} />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@email.com" required={step === 2} />
          </label>
          <label>
            Anything else
            <textarea name="notes" placeholder="Which room, and is water still moving?" />
          </label>
        </div>
        {formError ? <p className="rp-error">{formError}</p> : null}
        <p>
          Or email <a href={rpEmail.href}>{rpEmail.display}</a>.
        </p>
      </div>

      <div className="rp-talk-nav">
        {step > 0 ? (
          <button type="button" className="rp-btn rp-btn-ghost" onClick={() => setStep((current) => current - 1)}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <button type="button" className="rp-btn rp-btn-navy" onClick={() => setStep((current) => current + 1)}>
            Continue
          </button>
        ) : (
          <button className="rp-btn rp-btn-navy" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send it to Richard'}
          </button>
        )}
      </div>
    </form>
  );
}
