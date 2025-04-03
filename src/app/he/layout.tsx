'use client';

import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useEffect } from 'react';

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add RTL class immediately and set HTML attributes
  useEffect(() => {
    // First, make sure the body has the right class for RTL
    document.body.classList.add('rtl');
    // Set HTML direction and language
    document.documentElement.lang = 'he';
    document.documentElement.dir = 'rtl';
    // Remove loading state to show content
    document.documentElement.classList.remove('js-loading');
  }, []);

  return (
    <div dir="rtl" lang="he" className="flex flex-col min-h-screen">
      <AccessibilityToolbar locale="he" />
      <Navigation locale="he" />
      <main className="flex-grow">{children}</main>
      <Footer locale="he" />
    </div>
  );
} 