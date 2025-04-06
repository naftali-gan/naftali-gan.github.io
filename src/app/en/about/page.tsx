import About from '@/components/About';
import { getTranslations } from '@/utils/translations';
import { Metadata } from 'next';

// Generate metadata for the page
export function generateMetadata(): Metadata {
  const translations = getTranslations('en');
  
  return {
    title: translations.about.metadata.title,
    description: translations.about.metadata.description,
  };
}

export default function EnglishAboutPage() {
  // Get translations for this page
  const translations = getTranslations('en');
  
  return <About locale="en" translations={translations.about} />;
} 