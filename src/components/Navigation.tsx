'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

type NavigationProps = {
  locale?: string;
};

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  he: {
    home: 'בית',
    about: 'אודות',
    products: 'מוצרים',
    gallery: 'גלריה',
    contact: 'צור קשר',
  }
};

const Navigation = ({ locale = 'he' }: NavigationProps) => {
  const t = translations[locale as keyof typeof translations];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Create paths for language switching
  const otherLocale = locale === 'he' ? 'en' : 'he';
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'home', href: `/${locale === 'he' ? '' : locale}` },
    { key: 'about', href: `/${locale === 'he' ? '' : locale}/about` },
    { key: 'products', href: `/${locale === 'he' ? '' : locale}/products` },
    { key: 'gallery', href: `/${locale === 'he' ? '' : locale}/gallery` },
    { key: 'contact', href: `/${locale === 'he' ? '' : locale}/contact` },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale === 'he' ? '' : locale}`} className="font-bold text-xl text-green-600">
              גן נפתלי | Naftali Gan
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="mx-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
              >
                {t[item.key as keyof typeof t]}
              </Link>
            ))}
            
            <Link 
              href={`/${otherLocale}`}
              className="mx-3 py-2 px-4 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {locale === 'he' ? 'English' : 'עברית'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t[item.key as keyof typeof t]}
              </Link>
            ))}
            
            <Link 
              href={`/${otherLocale}`}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {locale === 'he' ? 'English' : 'עברית'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 