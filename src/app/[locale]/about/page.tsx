import ClientAboutPage from './client';

// This generates all the static routes at build time
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'he' }
  ];
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ClientAboutPage locale={locale} />;
} 