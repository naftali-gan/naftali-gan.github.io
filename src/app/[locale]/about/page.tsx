import About from '@/components/About';
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
    title: translations.about.metadata.title,
    description: translations.about.metadata.description,
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  // Get translations for this page
  const translations = getTranslations(locale);
  
  return <About locale={locale} translations={translations.about} />;
} 