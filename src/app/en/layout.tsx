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
  // Remove loading class after component mounts
  useEffect(() => {
    document.documentElement.classList.remove('js-loading');
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AccessibilityToolbar locale="en" />
        <Navigation locale="en" />
        <main className="flex-grow">{children}</main>
        <Footer locale="en" />
      </div>
    </>
  );
} 