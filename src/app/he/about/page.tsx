import About from '@/components/About';
import { getTranslations } from '@/utils/translations';
import { Metadata } from 'next';

// Generate metadata for the page
export function generateMetadata(): Metadata {
  const translations = getTranslations('he');
  
  return {
    title: translations.about.metadata.title,
    description: translations.about.metadata.description,
  };
}

export default function HebrewAboutPage() {
  // Get translations for this page
  const translations = getTranslations('he');
  
  return <About locale="he" translations={translations.about} />;
} 