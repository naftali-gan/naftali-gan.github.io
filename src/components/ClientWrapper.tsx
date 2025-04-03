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
    // Remove js-loading class when page is fully loaded
    document.documentElement.classList.remove('js-loading');
  }, []);
  
  return null;
} 