import type { Metadata } from 'next';
import { RpServicesIndex } from '@/components/pages';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Plumbing, drain cleaning, hot water tanks, Poly B replacement, and gas fitting in the North Okanagan.',
};

export default function Page() {
  return <RpServicesIndex />;
}
