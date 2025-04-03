'use client';

import { useEffect } from 'react';
import AccessibilityToolbar from './AccessibilityToolbar';
import Footer from './Footer';
import Navigation from './Navigation';

export function ClientAccessibilityToolbar({ locale }: { locale?: string }) {
  return <AccessibilityToolbar locale={locale} />;
}

export function ClientNavigation({ locale }: { locale?: string }) {
  return <Navigation locale={locale} />;
}

export function ClientFooter({ locale }: { locale?: string }) {
  return <Footer locale={locale} />;
}

export function DocumentSetup() {
  useEffect(() => {
    // Set a js-loading class and remove it after document loads
    document.documentElement.classList.add('js-loading');
    document.documentElement.classList.remove('js-loading');
    
    // We can add other document setup logic here if needed
  }, []);
  
  return null;
} 