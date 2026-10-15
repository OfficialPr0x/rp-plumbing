import { rpEmail } from '@/lib/site';

const TO = rpEmail.display;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    town?: string;
    job?: string;
    timing?: string;
    notes?: string;
    company?: string;
    elapsedMs?: number;
  } | null;

  if (!body || body.company) {
    return Response.json({ ok: true });
  }
  if ((body.elapsedMs ?? 0) < 1200) {
    return Response.json({ error: 'Send it once more.' }, { status: 400 });
  }

  const firstName = (body.firstName ?? '').trim();
  const lastName = (body.lastName ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const town = (body.town ?? '').trim();
  const job = (body.job ?? '').trim();
  const timing = (body.timing ?? '').trim();
  const notes = (body.notes ?? '').trim().slice(0, 500);

  if (!firstName || !lastName) {
    return Response.json({ error: 'Add a first and last name.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Check the email address.' }, { status: 400 });
  }
  if (phone.replace(/\D/g, '').length < 10) {
    return Response.json({ error: 'Check the phone number.' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!key || !from) {
    return Response.json(
      { error: 'The form is not connected yet. Call (604) 351-9145.' },
      { status: 503 },
    );
  }

  const text = [
    `${firstName} ${lastName}`,
    phone,
    email,
    town && `Town: ${town}`,
    job && `Need: ${job}`,
    timing && `Timing: ${timing}`,
    notes && `Notes: ${notes}`,
  ]
    .filter(Boolean)
    .join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [TO],
      reply_to: email,
      subject: `Service request${town ? ` · ${town}` : ''} · ${firstName} ${lastName}`,
      text,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: 'The form did not send. Call (604) 351-9145.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
