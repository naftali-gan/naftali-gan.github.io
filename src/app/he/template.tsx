'use client';

import { useEffect } from 'react';

export default function HebrewTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is used to set the correct attributes on the HTML element
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'he');
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  return <>{children}</>;
} 