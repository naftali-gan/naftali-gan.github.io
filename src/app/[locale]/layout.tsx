import { ClientAccessibilityToolbar, ClientFooter, ClientNavigation, DocumentSetup } from '@/components/ClientWrapper';
import { translations as enTranslations } from '@/translations/en';
import { translations as heTranslations } from '@/translations/he';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';

// Create a translations lookup object
const translationsMap = {
  en: enTranslations,
  he: heTranslations
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocales = ['en', 'he'];
  
  if (!validLocales.includes(locale)) {
    return {
      title: "Naftali's Nursery",
      description: "Quality plants and gardening products"
    };
  }
  
  // Get translations for the requested locale
  const translations = translationsMap[locale as keyof typeof translationsMap];
  
  return {
    title: translations.metadata.title,
    description: translations.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocales = ['en', 'he'];
  
  // Handle cases where the locale isn't valid
  if (!validLocales.includes(locale)) {
    notFound();
  }
  
  // Set the correct direction based on locale
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  
  return (
    <div dir={dir} lang={locale} className="flex flex-col min-h-screen">
      <DocumentSetup />
      <ClientAccessibilityToolbar locale={locale} />
      <ClientNavigation locale={locale} />
      <div className="flex-grow">
        {children}
      </div>
      <ClientFooter locale={locale} />
    </div>
  );
} 