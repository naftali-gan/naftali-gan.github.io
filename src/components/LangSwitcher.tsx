'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LangSwitcherProps = {
  locale?: string;
};

const LangSwitcher = ({ locale = 'he' }: LangSwitcherProps) => {
  const pathname = usePathname();
  const otherLocale = locale === 'he' ? 'en' : 'he';
  
  // Build the correct path for the other locale
  const getLocaleUrl = () => {
    if (!pathname) return `/${otherLocale}`;
    
    // If we're on the homepage
    if (pathname === '/' || pathname === '/he' || pathname === '/en') {
      return `/${otherLocale}`;
    }
    
    // If we're on a subpage, replace the current locale with the other one
    const pathParts = pathname.split('/');
    if (pathParts.length >= 2) {
      pathParts[1] = otherLocale;
      return pathParts.join('/');
    }
    
    return `/${otherLocale}`;
  };
  
  return (
    <Link 
      href={getLocaleUrl()}
      className="mx-3 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
    >
      {locale === 'he' ? 'English' : 'עברית'}
    </Link>
  );
};

export default LangSwitcher; 