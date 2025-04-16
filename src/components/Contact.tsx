'use client';

import { globalData } from '@/data/globalData';
import { useRTL } from '@/hooks/useRTL';
import { useTranslations } from '@/hooks/useTranslations';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { SiWaze } from 'react-icons/si';

type ContactProps = {
  locale: string;
};

export default function Contact({ locale }: ContactProps) {
  const { direction } = useRTL(locale);
  const t = useTranslations('contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <main className="min-h-screen py-16" dir={direction} lang={locale}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          {t('intro')}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">{t('leaveMessage')}</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-md mb-4">
                <p className="font-semibold">{t('thankYou')}</p>
                <p>{t('receivedMessage')}</p>
              </div>
            ) :
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1 font-medium">{t('fullName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 font-medium">{t('emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-1 font-medium">{t('phoneLabel')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-1 font-medium">{t('message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? t('sending') : t('send')}
                </button>
              </form>
            }
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('contactDetails')}</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start mb-4">
                <div className={`bg-green-100 p-2 rounded-full ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{t('address')}</h3>
                  <p className="text-gray-600">{t('addressValue')}</p>
                  <a 
                    href={globalData.wazeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-800 transition-colors mt-1"
                  >
                    <SiWaze className={`${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    <span>{locale === 'he' ? 'נווט אלינו ב-Waze' : 'Navigate with Waze'}</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className={`bg-green-100 p-2 rounded-full ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{t('phone')}</h3>
                  <p className="text-gray-600">{t('phoneValue')}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className={`bg-green-100 p-2 rounded-full ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{t('email')}</h3>
                  <p className="text-gray-600">{t('emailValue')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`bg-green-100 p-2 rounded-full ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{t('openingHours')}</h3>
                  <p className="text-gray-600">{t('openingHoursWeekdays')}</p>
                  <p className="text-gray-600">{t('openingHoursFriday')}</p>
                  <p className="text-gray-600">{t('openingHoursSaturday')}</p>
                </div>
              </div>

              <div className="flex items-start mt-4">
                <div className={`bg-green-100 p-2 rounded-full ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>
                  <FaGoogle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">{t('googleBusiness')}</h3>
                  <a 
                    href="https://g.co/kgs/vgbLYR3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    {t('visitOurPage')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-[300px]">
                {/* Google Map integration */}
                <iframe 
                  src={globalData.googleMapsIframeUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 