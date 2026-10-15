import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RpAreaPage } from '@/components/pages';
import { rpArea, rpAreas } from '@/lib/site';

export function generateStaticParams() {
  return rpAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const area = rpArea(city);
  if (!area) return {};
  return { title: area.seoTitle, description: area.description };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = rpArea(city);
  if (!area) notFound();
  return <RpAreaPage area={area} />;
}
