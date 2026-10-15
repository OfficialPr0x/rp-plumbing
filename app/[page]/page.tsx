import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RpServicePage } from '@/components/pages';
import { rpService, rpServices } from '@/lib/site';

export function generateStaticParams() {
  return rpServices.map((service) => ({ page: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const service = rpService(page);
  if (!service) return {};
  return { title: service.seoTitle, description: service.description };
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const service = rpService(page);
  if (!service) notFound();
  return <RpServicePage service={service} />;
}
