'use client';

import { useEffect } from 'react';

export default function EnglishTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is used to set the correct attributes on the HTML element
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
  }, []);

  return <>{children}</>;
} 