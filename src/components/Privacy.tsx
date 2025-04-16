'use client';

import { useRTL } from '@/hooks/useRTL';
import { createTranslator } from '@/utils/translations';

type PrivacyProps = {
  locale: string;
};

export default function Privacy({ locale }: PrivacyProps) {
  const { direction, textAlign } = useRTL(locale);
  const t = createTranslator(locale);
  
  return (
    <main className="min-h-screen py-16" dir={direction} lang={locale}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-8 text-center`}>{t('privacy.title')}</h1>
        
        <div className={`bg-white rounded-lg shadow-md p-8 mb-8 ${textAlign}`}>
          <p className="mb-8 text-lg">
            {t('privacy.intro')}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.collection.title')}</h2>
            <p className="mb-3">{t('privacy.collection.content1')}</p>
            <p>{t('privacy.collection.content2')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.usage.title')}</h2>
            <p className="mb-3">{t('privacy.usage.content1')}</p>
            <p>{t('privacy.usage.content2')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.legal.title')}</h2>
            <p>{t('privacy.legal.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.sharing.title')}</h2>
            <p>{t('privacy.sharing.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.cookies.title')}</h2>
            <p>{t('privacy.cookies.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.security.title')}</h2>
            <p>{t('privacy.security.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.rights.title')}</h2>
            <p>{t('privacy.rights.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.changes.title')}</h2>
            <p>{t('privacy.changes.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
            <p>{t('privacy.contact.content')}</p>
          </section>
          
          <div className="text-sm text-gray-500 mt-12">
            {t('privacy.lastUpdated')}
          </div>
        </div>
      </div>
    </main>
  );
} 