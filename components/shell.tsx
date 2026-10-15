import './rp.css';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Inter, Manrope } from 'next/font/google';
import { path } from '@/lib/paths';
import { rpAreas, rpEmail, rpPhone, rpPhotos, rpPlumbingSite, rpServices } from '@/lib/site';

const display = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-rp-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-rp-sans',
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'RP Plumbing',
  url: 'https://rpplumbing.ca/',
  telephone: '+1-604-351-9145',
  email: rpEmail.display,
  description: rpPlumbingSite.tagline,
  areaServed: ['Vernon', 'Armstrong', 'Enderby', 'North Okanagan'],
  founder: { '@type': 'Person', name: 'Richard Pugh' },
};

export function Shell({ current, children }: { current?: string; children: ReactNode }) {
  return (
    <div className={`rp ${display.variable} ${sans.variable}`}>
      <a className="rp-skip" href="#content">
        Skip to content
      </a>
      <header className="rp-nav">
        <div className="rp-wrap rp-nav-inner">
          <Link href={path()} className="rp-brand">
            <Image
              src={rpPhotos.logo}
              alt="RP Plumbing, North Okanagan"
              width={2172}
              height={724}
              priority
              className="rp-logo"
            />
          </Link>
          <a className="rp-call" href={rpPhone.href}>
            {rpPhone.display}
          </a>
          <details className="rp-menu">
            <summary aria-label="Menu">
              <span className="rp-burger" aria-hidden="true" />
            </summary>
            <div className="rp-menu-list">
              <Link href={path('/services')} aria-current={current === '/services' ? 'page' : undefined}>
                Services
              </Link>
              {rpServices.map((service) => (
                <Link key={service.slug} href={path(service.href)}>
                  {service.nav}
                </Link>
              ))}
              {rpAreas.map((area) => (
                <Link key={area.slug} href={path(area.href)} aria-current={current === area.href ? 'page' : undefined}>
                  {area.name}
                </Link>
              ))}
              <Link href={path('/about')} aria-current={current === '/about' ? 'page' : undefined}>
                About
              </Link>
              <Link href={path('/contact')} aria-current={current === '/contact' ? 'page' : undefined}>
                Request service
              </Link>
            </div>
          </details>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer className="rp-foot">
        <div className="rp-wrap rp-foot-grid">
          <div>
            <span className="rp-logo-plate">
              <Image src={rpPhotos.logo} alt="" width={2172} height={724} className="rp-logo" />
            </span>
            <h2>Richard Pugh. Vernon to Enderby.</h2>
            <p>Plumbing, drainage, and gas for Vernon, Armstrong, Enderby, and the North Okanagan.</p>
            <p style={{ marginTop: '0.8rem' }}>
              <a href={rpPhone.href}>{rpPhone.display}</a>
              <a href={rpEmail.href}>{rpEmail.display}</a>
            </p>
          </div>
          <div>
            <p className="rp-kicker">Services</p>
            {rpServices.map((service) => (
              <Link key={service.slug} href={path(service.href)}>
                {service.nav}
              </Link>
            ))}
          </div>
          <div>
            <p className="rp-kicker">Towns</p>
            {rpAreas.map((area) => (
              <Link key={area.slug} href={path(area.href)}>
                {area.name}
              </Link>
            ))}
            <Link href={path('/about')}>About Richard Pugh</Link>
            <Link href={path('/contact')}>Request service</Link>
          </div>
        </div>
        <p className="rp-wrap rp-legal">
          RP Plumbing. Richard Pugh. No street address is published, so none is shown here. The photographs are made
          for this site. When Richard has his own photos, they take these places.
        </p>
      </footer>
      <div className="rp-mobar">
        <a href={rpPhone.href}>Call {rpPhone.display}</a>
        <Link href={path('/contact')}>Request</Link>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
