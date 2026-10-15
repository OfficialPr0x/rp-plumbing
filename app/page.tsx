import type { Metadata } from 'next';
import { RpHome } from '@/components/home';

export const metadata: Metadata = {
  title: 'RP Plumbing · Vernon to Enderby',
  description: 'Plumbing, drainage, and gas fitting for Vernon, Armstrong, Enderby, and the North Okanagan. Call (604) 351-9145.',
};

export default function Page() {
  return <RpHome />;
}
