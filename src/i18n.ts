import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Load messages for a specific locale
const loadMessages = async (locale: string) => {
  try {
    return (await import(`./messages/${locale}/index.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for locale "${locale}"`, error);
    notFound();
  }
};

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    notFound();
  }
  
  const messages = await loadMessages(locale);
  
  return {
    messages,
    // Required by next-intl
    locale,
    // Additional configuration if needed
    timeZone: 'Asia/Jerusalem',
    now: new Date(),
  };
}); 