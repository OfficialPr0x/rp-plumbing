import type { Metadata } from 'next';
import { RpContact } from '@/components/pages';

export const metadata: Metadata = {
  title: 'Request service',
  description: 'Tell Richard the town and what failed. Call (604) 351-9145 if water is moving or you smell gas.',
};

export default function Page() {
  return <RpContact />;
}
