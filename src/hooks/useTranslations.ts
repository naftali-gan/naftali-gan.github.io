'use client';

import { getTranslations, Translations } from '@/utils/translations';
import { useParams } from 'next/navigation';

/**
 * Hook for accessing translations for a specific section
 * @param section The section of translations to access
 * @returns A function that accepts a key and returns the translated string
 */
export function useTranslations<T extends keyof Translations>(section: T) {
  // Get locale from route params
  const params = useParams();
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale as string;
  
  // Get translations for the current locale
  const translations = getTranslations(locale);
  
  // Return a function that accepts a key and returns the translation
  return function t<K extends keyof Translations[T]>(key: K): string {
    if (!translations[section]) {
      console.warn(`Translation section not found: ${String(section)}`);
      return String(key);
    }
    
    const value = translations[section][key];
    
    if (typeof value !== 'string') {
      console.warn(`Translation for key ${String(key)} is not a string:`, value);
      return String(key);
    }
    
    return value;
  };
} 