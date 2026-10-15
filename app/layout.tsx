import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Shell } from '@/components/shell';
import { rpPlumbingSite } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rpplumbing.ca'),
  title: {
    default: 'RP Plumbing · Vernon',
    template: '%s · RP Plumbing',
  },
  description: rpPlumbingSite.tagline,
  openGraph: {
    title: 'RP Plumbing · Vernon to Enderby',
    description: rpPlumbingSite.tagline,
    url: 'https://rpplumbing.ca',
    siteName: 'RP Plumbing',
    images: [{ url: '/visit.jpg', width: 2400, height: 1340, alt: 'RP Plumbing above a North Okanagan lake' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
