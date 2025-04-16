import Gallery from '@/components/Gallery';
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
    title: `${translations.gallery.title} | ${translations.metadata.title.split('|')[0].trim()}`,
    description: locale === 'en' 
      ? 'Discover photos of our nursery and beautiful plants at Naftali\'s Nursery'
      : 'צפו בתמונות מהמשתלה שלנו והצמחים היפים שלנו במשתלה של נפתלי',
  };
}

export default async function GalleryPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return <Gallery locale={locale} />;
} 