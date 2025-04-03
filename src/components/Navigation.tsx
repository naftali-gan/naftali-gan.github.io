'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LangSwitcher from './LangSwitcher';

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
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'home', href: locale === 'he' ? '/he' : '/en' },
    { key: 'about', href: `/${locale}/about` },
    { key: 'products', href: `/${locale}/products` },
    { key: 'gallery', href: `/${locale}/gallery` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <nav className="bg-white shadow-md w-full py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={locale === 'he' ? '/he' : '/en'} className="font-extrabold text-2xl lg:text-3xl text-green-600">
              משתלת נפתלי | Naftali&apos;s Nursery
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="mx-4 py-2 text-gray-700 hover:text-green-600 font-bold text-lg"
              >
                {t[item.key as keyof typeof t]}
              </Link>
            ))}
            
            <div onClick={() => setIsMenuOpen(false)}>
              <LangSwitcher locale={locale} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 font-bold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t[item.key as keyof typeof t]}
              </Link>
            ))}
            
            <div onClick={() => setIsMenuOpen(false)}>
              <LangSwitcher locale={locale} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 