'use client';

import { useRTL } from '@/hooks/useRTL';
import { createTranslator } from '@/utils/translations';

type TermsProps = {
  locale: string;
};

export default function Terms({ locale }: TermsProps) {
  const { direction, textAlign } = useRTL(locale);
  const t = createTranslator(locale);
  
  return (
    <main className="min-h-screen py-16" dir={direction} lang={locale}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-8 text-center`}>{t('terms.title')}</h1>
        
        <div className={`bg-white rounded-lg ${textAlign}`}>
          <p className="mb-8 text-lg">
            {t('terms.intro')}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.acceptance.title')}</h2>
            <p>{t('terms.acceptance.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.changes.title')}</h2>
            <p>{t('terms.changes.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.account.title')}</h2>
            <p>{t('terms.account.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.conduct.title')}</h2>
            <p>{t('terms.conduct.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.intellectual.title')}</h2>
            <p>{t('terms.intellectual.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.products.title')}</h2>
            <p>{t('terms.products.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.pricing.title')}</h2>
            <p>{t('terms.pricing.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.disclaimer.title')}</h2>
            <p>{t('terms.disclaimer.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.limitation.title')}</h2>
            <p>{t('terms.limitation.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.governing.title')}</h2>
            <p>{t('terms.governing.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.dispute.title')}</h2>
            <p>{t('terms.dispute.content')}</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('terms.contact.title')}</h2>
            <p>{t('terms.contact.content')}</p>
          </section>
          
          <div className="text-sm text-gray-500 mt-12">
            {t('terms.lastUpdated')}
          </div>
        </div>
      </div>
    </main>
  );
} 