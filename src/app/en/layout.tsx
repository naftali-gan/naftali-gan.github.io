'use client';

import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useEffect } from 'react';

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add LTR class immediately and set HTML attributes
  useEffect(() => {
    // First, make sure the body has the right class for LTR
    document.body.classList.add('ltr');
    // Set HTML direction and language
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    // Remove loading state to show content
    document.documentElement.classList.remove('js-loading');
  }, []);

  return (
    <div dir="ltr" lang="en" className="flex flex-col min-h-screen">
      <AccessibilityToolbar locale="en" />
      <Navigation locale="en" />
      <main className="flex-grow">{children}</main>
      <Footer locale="en" />
    </div>
  );
} 