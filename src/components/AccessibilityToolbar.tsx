'use client';

import { useEffect, useState } from 'react';
import { FaAdjust, FaRedo, FaTextHeight } from 'react-icons/fa';
import { MdAccessible, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

type AccessibilityToolbarProps = {
  locale?: string;
};

const translations = {
  en: {
    title: 'Accessibility',
    increaseFontSize: 'Increase Font Size',
    decreaseFontSize: 'Decrease Font Size',
    highContrast: 'High Contrast',
    reset: 'Reset Settings'
  },
  he: {
    title: 'נגישות',
    increaseFontSize: 'הגדל גופן',
    decreaseFontSize: 'הקטן גופן',
    highContrast: 'ניגודיות גבוהה',
    reset: 'איפוס הגדרות'
  }
};

const AccessibilityToolbar = ({ locale = 'he' }: AccessibilityToolbarProps) => {
  const t = translations[locale as keyof typeof translations];
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // percentage
  const [highContrast, setHighContrast] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const { fontSize: savedFontSize, highContrast: savedHighContrast } = JSON.parse(savedSettings);
        setFontSize(savedFontSize);
        setHighContrast(savedHighContrast);
      } catch (error) {
        console.error('Failed to parse saved accessibility settings', error);
      }
    }
  }, [fontSize, highContrast]);

  // Save settings when changed
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify({ fontSize, highContrast }));
  }, [fontSize, highContrast]);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label={t.title}
      >
        <MdAccessible size={24} />
      </button>
      
      {isOpen && (
        <div className="mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col gap-2 text-sm">
          <h3 className="font-bold text-center">{t.title}</h3>
          
          <button 
            onClick={increaseFontSize}
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
          >
            <FaTextHeight /> <MdKeyboardArrowUp /> {t.increaseFontSize}
          </button>
          
          <button 
            onClick={decreaseFontSize}
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
          >
            <FaTextHeight /> <MdKeyboardArrowDown /> {t.decreaseFontSize}
          </button>
          
          <button 
            onClick={toggleHighContrast}
            className={`flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded ${highContrast ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
          >
            <FaAdjust /> {t.highContrast}
          </button>
          
          <button 
            onClick={resetSettings}
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
          >
            <FaRedo /> {t.reset}
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar; 