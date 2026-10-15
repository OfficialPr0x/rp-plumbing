import type { Metadata } from 'next';
import { RpAbout } from '@/components/pages';

export const metadata: Metadata = {
  title: 'About Richard Pugh',
  description: 'Richard Pugh. Plumbing, drainage, and gas fitting for Vernon, Armstrong, Enderby, and the North Okanagan.',
};

export default function Page() {
  return <RpAbout />;
}
