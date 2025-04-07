import Contact from '@/components/Contact';
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
    title: `${translations.contact.title} | ${translations.metadata.title.split('|')[0].trim()}`,
    description: `${locale === 'en' ? 'Contact Naftali\'s Nursery' : 'צור קשר עם משתלת נפתלי'}`,
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return <Contact locale={locale} />;
} 