'use client';

import { useRTL } from '@/hooks/useRTL';
import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Lazy-loaded components
import dynamic from 'next/dynamic';
const ClientNavigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const ClientFooter = dynamic(() => import('@/components/Footer'), { ssr: false });
const ClientAccessibilityToolbar = dynamic(() => import('@/components/AccessibilityToolbar'), { ssr: false });

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = params.locale as string;
  const { direction } = useRTL(locale);
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null);
  
  useEffect(() => {
    // Dynamically load the messages
    const loadMessages = async () => {
      try {
        const messagesModule = await import(`@/messages/${locale}/index.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error(`Failed to load messages for locale ${locale}`, error);
      }
    };
    
    loadMessages();
  }, [locale]);
  
  // Don't render anything until messages are loaded
  if (!messages) {
    return <div>Loading...</div>;
  }
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={direction} lang={locale} className="flex flex-col min-h-screen">
        <ClientAccessibilityToolbar locale={locale} />
        <ClientNavigation locale={locale} />
        <div className="flex-grow">
          {children}
        </div>
        <ClientFooter locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
} 