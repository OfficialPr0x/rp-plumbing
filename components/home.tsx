import Link from 'next/link';
import Image from 'next/image';
import { RpRequestForm } from '@/components/form';
import { path } from '@/lib/paths';
import { rpAreas, rpFaqs, rpPhone, rpPhoto, rpServices } from '@/lib/site';

const tradeLines: Record<string, string> = {
  plumbing: 'Taps, toilets, tubs, and the line that froze.',
  'drain-cleaning': 'Slow sinks, and the clog that came back.',
  'gas-fitting': 'Water heaters, hookups, and leak checks.',
};

const jobLines: Record<string, string> = {
  'hot-water-tanks': 'Install, repair, or a new gas tank when the old one is done.',
  'poly-b-replacement': 'Grey polybutylene out. PEX in. The job insurers ask for.',
};

export function RpHome() {
  const trades = rpServices.filter((service) => service.slug in tradeLines);
  const jobs = rpServices.filter((service) => service.slug in jobLines);

  return (
    <>
      <section className="rp-hero">
        <Image
          src={rpPhoto('hero')}
          alt="Kalamalka Lake and a service van at a North Okanagan home"
          fill
          priority
          sizes="100vw"
          className="rp-hero-photo"
        />
        <div className="rp-hero-dock">
          <p className="rp-kicker">Richard Pugh · North Okanagan</p>
          <h1>
            From the lake
            <br />
            to <em>Enderby.</em>
          </h1>
          <span className="rp-waterline" aria-hidden="true" />
          <a className="rp-hero-phone" href={rpPhone.href}>
            {rpPhone.display}
          </a>
        </div>
      </section>

      <section className="rp-film" aria-label="Plumbing, drainage, and gas">
        {trades.map((service) => (
          <Link key={service.slug} className="rp-tile" href={path(service.href)}>
            <Image src={rpPhoto(service.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 34vw" className="rp-tile-photo" />
            <span className="rp-tile-copy">
              <strong>{service.title}</strong>
              <em>{tradeLines[service.slug]}</em>
            </span>
          </Link>
        ))}
      </section>

      <section className="rp-richard">
        <div className="rp-richard-photo">
          <Image
            src={rpPhoto('about')}
            alt="A plumber at a van, looking out over Kalamalka Lake"
            fill
            sizes="(max-width: 860px) 100vw, 58vw"
            className="rp-tile-photo"
          />
        </div>
        <div className="rp-richard-copy">
          <p className="rp-kicker">The name on the call</p>
          <h2>Richard Pugh.</h2>
          <p>
            RP Plumbing is his. Homes and businesses. Plumbing, drainage, and gas fitting, from Vernon through
            Armstrong to Enderby.
          </p>
          <p>He advertises a free consultation, and a day-and-night line for a leak, a blocked drain, or a gas problem.</p>
          <div className="rp-actions">
            <a className="rp-btn rp-btn-solid" href={rpPhone.href}>
              Call Richard
            </a>
            <Link className="rp-btn rp-btn-ghost" href={path('/about')}>
              About him
            </Link>
          </div>
        </div>
      </section>

      <section className="rp-section">
        <div className="rp-wrap">
          <p className="rp-kicker">Not a fifteen-minute visit</p>
          <h2>Poly B, and the tank that quit.</h2>
          <div className="rp-pair">
            {jobs.map((service) => (
              <Link key={service.slug} className="rp-tile rp-tile-job" href={path(service.href)}>
                <Image src={rpPhoto(service.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" className="rp-tile-photo" />
                <span className="rp-tile-copy">
                  <strong>{service.nav}</strong>
                  <em>{jobLines[service.slug]}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rp-places" aria-label="Towns">
        {rpAreas.map((area) => (
          <Link key={area.slug} className="rp-place" href={path(area.href)}>
            <Image src={rpPhoto(area.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 34vw" className="rp-tile-photo" />
            <span className="rp-tile-copy">
              <small>Plumber in</small>
              <strong>{area.name}</strong>
            </span>
          </Link>
        ))}
      </section>

      <section className="rp-faq-section">
        <div className="rp-wrap">
          <p className="rp-kicker">Before you call</p>
          <h2>Ask it straight.</h2>
          <span className="rp-waterline" aria-hidden="true" />
          <div className="rp-faq">
            {rpFaqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rp-section rp-talk-section">
        <div className="rp-wrap rp-ask">
          <div>
            <p className="rp-kicker">The request</p>
            <h2>Tell him what failed.</h2>
            <p className="rp-intro">
              Town, the job, and a number he can call back. If water is moving or you smell gas, skip the form.
            </p>
            <a className="rp-phone-ink" href={rpPhone.href}>
              {rpPhone.display}
            </a>
          </div>
          <RpRequestForm />
        </div>
      </section>
    </>
  );
}
