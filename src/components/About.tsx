import { useRTL } from '@/hooks/useRTL';
import { Translations } from '@/utils/translations';
import Image from 'next/image';

type AboutProps = {
  locale: string;
  translations: Translations['about'];
};

export default function About({ locale, translations }: AboutProps) {
  const { direction, textAlign } = useRTL(locale);
  
  return (
    <main className="min-h-screen py-16" dir={direction} lang={locale}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-8 text-center`}>{translations.title}</h1>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-16`}>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero-background.jpg"
              alt={translations.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className={`flex flex-col justify-center ${textAlign}`}>
            <h2 className="text-2xl font-semibold mb-4">{translations.story}</h2>
            <p className="mb-4">
              {translations.storyContent}
            </p>
            <p className="mb-4">
              {translations.storyContent2}
            </p>
            <p>
              {translations.storyContent3}
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">{translations.valuesTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-lg shadow ${textAlign}`}>
              <h3 className="text-xl font-semibold mb-3 text-green-700">{translations.quality}</h3>
              <p>{translations.qualityContent}</p>
            </div>
            
            <div className={`bg-white p-6 rounded-lg shadow ${textAlign}`}>
              <h3 className="text-xl font-semibold mb-3 text-green-700">{translations.sustainability}</h3>
              <p>{translations.sustainabilityContent}</p>
            </div>
            
            <div className={`bg-white p-6 rounded-lg shadow ${textAlign}`}>
              <h3 className="text-xl font-semibold mb-3 text-green-700">{translations.service}</h3>
              <p>{translations.serviceContent}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 