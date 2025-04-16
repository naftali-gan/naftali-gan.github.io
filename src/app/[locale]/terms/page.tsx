import Terms from '@/components/Terms';
import { getTranslations } from '@/utils/translations';
import { Metadata } from 'next';

// Generate static paths at build time
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'he' }
  ];
}

// Generate metadata for the page
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const translations = getTranslations(locale);
  
  return {
    title: translations.terms.metadata.title,
    description: translations.terms.metadata.description,
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return <Terms locale={locale} />;
} 