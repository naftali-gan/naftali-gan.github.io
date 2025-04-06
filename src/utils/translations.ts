import { translations as enTranslations } from '@/translations/en';
import { translations as heTranslations } from '@/translations/he';

export type Translations = typeof enTranslations;

/**
 * Get translations for a specific locale
 * @param locale The locale to get translations for ('en' or 'he')
 * @returns The translations object for the specified locale
 */
export function getTranslations(locale: string): Translations {
  switch (locale) {
    case 'he':
      return heTranslations;
    case 'en':
    default:
      return enTranslations;
  }
}

/**
 * Create a translation function for accessing nested translations
 * @param locale The locale to get translations for
 * @returns A function that accepts a dot-notation path to access nested translations
 */
export function createTranslator(locale: string) {
  const translations = getTranslations(locale);

  return function t(path: string): string {
    const keys = path.split('.');
    let result: unknown = translations;

    for (const key of keys) {
      if (result && typeof result === 'object' && Object.prototype.hasOwnProperty.call(result, key)) {
        result = (result as Record<string, unknown>)[key];
      } else {
        console.warn(`Translation key not found: ${path}`);
        return path; // Return the key as fallback
      }
    }

    if (typeof result !== 'string') {
      console.warn(`Translation for key ${path} is not a string:`, result);
      return path; // Return the key as fallback
    }

    return result;
  };
} 