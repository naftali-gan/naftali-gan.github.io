import Privacy from '@/components/Privacy';
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
    title: translations.privacy.metadata.title,
    description: translations.privacy.metadata.description,
  };
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return <Privacy locale={locale} />;
} 