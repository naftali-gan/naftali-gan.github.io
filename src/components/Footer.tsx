'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

type FooterProps = {
  locale?: string;
};

const translations = {
  en: {
    rights: 'All rights reserved to Naftali Gan',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    contact: 'Contact Us',
  },
  he: {
    rights: 'כל הזכויות שמורות לגן נפתלי',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאי שימוש',
    contact: 'צור קשר',
  }
};

const Footer = ({ locale = 'he' }: FooterProps) => {
  const t = translations[locale as keyof typeof translations];

  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Quick links href construction with locale path 
  const getLink = (path: string) => `/${locale === 'he' ? '' : locale}${path}`;

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>רחוב הגן 123, תל אביב, ישראל</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@naftaligan.co.il</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <span>א&apos;-ה&apos;: 8:00-18:00, ו&apos;: 8:00-14:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href={getLink('')} className="hover:text-green-300 transition-colors">
                  {locale === 'he' ? 'בית' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href={getLink('/about')} className="hover:text-green-300 transition-colors">
                  {locale === 'he' ? 'אודות' : 'About'}
                </Link>
              </li>
              <li>
                <Link href={getLink('/products')} className="hover:text-green-300 transition-colors">
                  {locale === 'he' ? 'מוצרים' : 'Products'}
                </Link>
              </li>
              <li>
                <Link href={getLink('/gallery')} className="hover:text-green-300 transition-colors">
                  {locale === 'he' ? 'גלריה' : 'Gallery'}
                </Link>
              </li>
              <li>
                <Link href={getLink('/contact')} className="hover:text-green-300 transition-colors">
                  {locale === 'he' ? 'צור קשר' : 'Contact Us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{locale === 'he' ? 'עקבו אחרינו' : 'Follow Us'}</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-2">{locale === 'he' ? 'הירשמו לניוזלטר שלנו' : 'Subscribe to our newsletter'}</h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={locale === 'he' ? 'האימייל שלך' : 'Your email'} 
                  className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                />
                <button 
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded font-medium"
                >
                  {locale === 'he' ? 'הרשמה' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-800 text-center">
          <p>{t.rights} © {currentYear}</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href={getLink('/privacy')} className="hover:text-green-300 transition-colors">
              {t.privacy}
            </Link>
            <Link href={getLink('/terms')} className="hover:text-green-300 transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;