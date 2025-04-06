import { useMemo } from 'react';

/**
 * Hook to determine RTL direction based on locale
 * @param locale The current locale
 * @returns Object with isRTL boolean and direction string
 */
export function useRTL(locale: string) {
  const rtlLocales = ['he', 'ar'];
  
  const isRTL = useMemo(() => {
    return rtlLocales.includes(locale);
  }, [locale]);
  
  const direction = useMemo(() => {
    return isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);
  
  const textAlign = useMemo(() => {
    return isRTL ? 'text-right' : 'text-left';
  }, [isRTL]);
  
  const flexDir = useMemo(() => {
    return isRTL ? 'flex-row-reverse' : 'flex-row';
  }, [isRTL]);
  
  return {
    isRTL,
    direction,
    textAlign,
    flexDir
  };
} 