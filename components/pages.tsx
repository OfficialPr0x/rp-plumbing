import Link from 'next/link';
import Image from 'next/image';
import { RpRequestForm } from '@/components/form';
import { path } from '@/lib/paths';
import {
  rpAreas,
  rpEmail,
  rpPhone,
  rpPhoto,
  rpPhotos,
  rpServices,
  type RpArea,
  type RpService,
} from '@/lib/site';

const indexOrder = ['plumbing', 'drain-cleaning', 'gas-fitting', 'hot-water-tanks', 'poly-b-replacement'];

export function RpServicesIndex() {
  const ordered = indexOrder
    .map((slug) => rpServices.find((service) => service.slug === slug))
    .filter((service): service is RpService => Boolean(service));

  return (
    <>
      <section className="rp-index-intro">
        <div className="rp-wrap">
          <p className="rp-kicker">Services</p>
          <h1>Water, drains, and gas.</h1>
        </div>
      </section>
      <section className="rp-film rp-index-film" aria-label="Services">
        {ordered.map((service) => (
          <Link key={service.slug} className="rp-tile" href={path(service.href)}>
            <Image src={rpPhoto(service.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 34vw" className="rp-tile-photo" />
            <span className="rp-tile-copy">
              <strong>{service.nav}</strong>
              <em>{service.headline}</em>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

export function RpServicePage({ service }: { service: RpService }) {
  const others = rpServices.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="rp-hero rp-poster">
        <Image
          src={rpPhoto(service.slug)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="rp-hero-photo"
        />
        <div className="rp-hero-dock">
          <p className="rp-kicker">{service.eyebrow} · North Okanagan</p>
          <h1>{service.headline}</h1>
          <span className="rp-waterline" aria-hidden="true" />
          <a className="rp-hero-phone" href={rpPhone.href}>
            {rpPhone.display}
          </a>
        </div>
      </section>

      <section className="rp-story">
        <div className="rp-wrap rp-story-grid">
          <p className="rp-story-lede">{service.lede}</p>
          <ul className="rp-points">
            {service.points.map((point) => (
              <li key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rp-band rp-section">
        <div className="rp-wrap">
          <p className="rp-kicker">On the visit</p>
          <h2>What happens after you call.</h2>
          <ul className="rp-expect">
            {service.expect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rp-film rp-related" aria-label="Other work">
        {others.map((item) => (
          <Link key={item.slug} className="rp-tile" href={path(item.href)}>
            <Image src={rpPhoto(item.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 25vw" className="rp-tile-photo" />
            <span className="rp-tile-copy">
              <strong>{item.nav}</strong>
              <em>{item.headline}</em>
            </span>
          </Link>
        ))}
      </section>

      <section className="rp-section">
        <div className="rp-wrap rp-ask">
          <div>
            <p className="rp-kicker">Request {service.nav.toLowerCase()}</p>
            <h2>Tell Richard the town.</h2>
            <p className="rp-intro">
              If water is moving or you smell gas, call {rpPhone.display}. The form is for a job that can wait a reply.
            </p>
          </div>
          <RpRequestForm />
        </div>
      </section>
    </>
  );
}

export function RpAreaPage({ area }: { area: RpArea }) {
  const others = rpAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <section className="rp-hero rp-poster">
        <Image src={rpPhoto(area.slug)} alt="" fill priority sizes="100vw" className="rp-hero-photo" />
        <div className="rp-hero-dock">
          <p className="rp-kicker">{area.name}, BC</p>
          <h1>{area.headline}</h1>
          <span className="rp-waterline" aria-hidden="true" />
          <a className="rp-hero-phone" href={rpPhone.href}>
            {rpPhone.display}
          </a>
        </div>
      </section>

      <section className="rp-story">
        <div className="rp-wrap rp-story-grid">
          <div>
            <p className="rp-story-lede">{area.lede}</p>
            {area.body.map((paragraph) => (
              <p key={paragraph} className="rp-intro">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="rp-points">
            {area.jobs.map((job) => (
              <li key={job}>
                <strong>{job}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rp-places rp-places-two" aria-label="Other towns">
        {others.map((item) => (
          <Link key={item.slug} className="rp-place" href={path(item.href)}>
            <Image src={rpPhoto(item.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" className="rp-tile-photo" />
            <span className="rp-tile-copy">
              <small>Plumber in</small>
              <strong>{item.name}</strong>
            </span>
          </Link>
        ))}
      </section>

      <section className="rp-section">
        <div className="rp-wrap rp-ask">
          <div>
            <p className="rp-kicker">{area.name}</p>
            <h2>Request service in {area.name}.</h2>
            <p className="rp-intro">Same number as Vernon. Call if it is happening now.</p>
          </div>
          <RpRequestForm town={area.name} />
        </div>
      </section>
    </>
  );
}

export function RpAbout() {
  const trades = rpServices.filter((service) =>
    ['plumbing', 'drain-cleaning', 'gas-fitting'].includes(service.slug),
  );

  return (
    <>
      <section className="rp-hero rp-poster rp-arrive">
        <Image
          src={rpPhoto('visit')}
          alt="A plumber walking to a house above a North Okanagan lake"
          fill
          priority
          sizes="100vw"
          className="rp-hero-photo"
        />
        <div className="rp-hero-dock">
          <p className="rp-kicker">Richard Pugh · North Okanagan</p>
          <h1>
            Richard
            <br />
            <em>Pugh.</em>
          </h1>
          <span className="rp-waterline" aria-hidden="true" />
          <a className="rp-hero-phone" href={rpPhone.href}>
            {rpPhone.display}
          </a>
        </div>
      </section>

      <section className="rp-still" aria-label="The truck">
        <Image
          src={rpPhotos.about}
          alt="An open plumbing van above the lake, with the tools in the rack"
          fill
          sizes="100vw"
          className="rp-still-photo"
        />
        <div className="rp-still-caption">
          <p className="rp-kicker">The truck</p>
          <strong>One drive. Three towns.</strong>
        </div>
      </section>

      <section className="rp-story">
        <div className="rp-wrap rp-story-grid">
          <div>
            <p className="rp-story-lede">
              RP Plumbing is his. Homes and businesses, from Vernon through Armstrong to Enderby.
            </p>
            <p className="rp-intro">
              He advertises a free consultation, and a day-and-night line for a leak, a blocked drain, or a gas
              problem.
            </p>
          </div>
          <ul className="rp-points">
            <li>
              <strong>The phone</strong>
              <span>
                <a href={rpPhone.href}>{rpPhone.display}</a>. That is the number on rpplumbing.ca.
              </span>
            </li>
            <li>
              <strong>The email</strong>
              <span>
                <a href={rpEmail.href}>{rpEmail.display}</a>
              </span>
            </li>
            <li>
              <strong>The towns</strong>
              <span>
                Vernon, Armstrong, Enderby, and the North Okanagan around them. The profile city listed with the
                business is Langley. No street address is published, so the site leads with the phone.
              </span>
            </li>
            <li>
              <strong>The record</strong>
              <span>
                They describe the crew as skilled, licensed, and certified. A ticket number is not printed there, so
                this page does not invent one. Ask for it when a permit or an insurer needs it.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="rp-band rp-section">
        <div className="rp-wrap">
          <p className="rp-kicker">The photographs</p>
          <h2>Made for this site.</h2>
          <p className="rp-band-lede">
            The valley, and the work RP Plumbing already describes. They are not labeled as a finished job of his.
            When Richard has his own photos, they take these places.
          </p>
        </div>
      </section>

      <section className="rp-film" aria-label="The work">
        {trades.map((service) => (
          <Link key={service.slug} className="rp-tile" href={path(service.href)}>
            <Image src={rpPhoto(service.slug)} alt="" fill sizes="(max-width: 860px) 100vw, 34vw" className="rp-tile-photo" />
            <span className="rp-tile-copy">
              <strong>{service.nav}</strong>
              <em>{service.headline}</em>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

export function RpContact() {
  return (
    <section className="rp-section rp-page-hero">
      <div className="rp-wrap rp-split">
        <div>
          <p className="rp-kicker">Request service</p>
          <h1>Tell Richard the town and what failed.</h1>
          <p className="rp-intro">
            A leak, a rising drain, or the smell of gas: call {rpPhone.display}. He advertises that line day and night.
            The form is for work that can wait a reply: a tank, Poly B, a renovation, a drain that is slow rather than
            flooding.
          </p>
          <p className="rp-intro">
            The request goes to {rpEmail.display}. If water is moving or you smell gas, call.
          </p>
        </div>
        <RpRequestForm />
      </div>
    </section>
  );
}
