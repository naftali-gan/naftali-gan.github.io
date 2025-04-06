'use client';

import MetadataHead from '@/components/MetadataHead';
import { useRTL } from '@/hooks/useRTL';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function AboutPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('about');
  const { direction, textAlign, flexDir } = useRTL(locale);
  
  return (
    <>
      <MetadataHead section="about" metadataKey="metadata" />
      
      <main className="min-h-screen py-16" dir={direction} lang={locale}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className={`text-4xl font-bold mb-8 text-center`}>{t('title')}</h1>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-16`}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero-background.jpg"
                alt={t('title')}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className={`flex flex-col justify-center ${textAlign}`}>
              <h2 className="text-2xl font-semibold mb-4">{t('story')}</h2>
              <p className="mb-4">
                {t('storyContent')}
              </p>
              <p className="mb-4">
                {t('storyContent2')}
              </p>
              <p>
                {t('storyContent3')}
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">{t('valuesTitle')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`bg-white p-6 rounded-lg shadow ${textAlign}`}>
                <h3 className="text-xl font-semibold mb-3 text-green-700">{t('quality')}</h3>
                <p>{t('qualityContent')}</p>
              </div>
              
              <div className={`bg-white p-6 rounded-lg shadow ${textAlign}`}>
                <h3 className="text-xl font-semibold mb-3 text-green-700">{t('sustainability')}</h3>
                <p>{t('sustainabilityContent')}</p>
              </div>
              
              <div className={`bg-white p-6 rounded-lg shadow ${textAlign}`}>
                <h3 className="text-xl font-semibold mb-3 text-green-700">{t('service')}</h3>
                <p>{t('serviceContent')}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-6">{t('team')}</h2>
            <p className="max-w-3xl mx-auto mb-8">
              {t('teamContent')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.raw('teamMembers').map((member: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">{t('photoPlaceholder')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 