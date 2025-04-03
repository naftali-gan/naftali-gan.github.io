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
  const [mounted, setMounted] = useState(false);

  // Set mounted state after component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply accessibility settings - only run this on the client
  useEffect(() => {
    if (!mounted) return;
    
    document.documentElement.style.fontSize = `${fontSize}%`;
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [fontSize, highContrast, mounted]);

  // Load saved settings - only run once after mounting
  useEffect(() => {
    if (!mounted) return;
    
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
  }, [mounted]);

  // Save settings when changed - only run on client
  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('accessibility-settings', JSON.stringify({ fontSize, highContrast }));
  }, [fontSize, highContrast, mounted]);

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

  // Don't render anything during server-side rendering to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-20 left-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label={t.title}
      >
        <MdAccessible size={24} />
      </button>
      
      {isOpen && (
        <div className="mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 text-sm">
          <h3 className="font-bold text-center">{t.title}</h3>
          
          <button 
            onClick={increaseFontSize}
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded"
          >
            <FaTextHeight /> <MdKeyboardArrowUp /> {t.increaseFontSize}
          </button>
          
          <button 
            onClick={decreaseFontSize}
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded"
          >
            <FaTextHeight /> <MdKeyboardArrowDown /> {t.decreaseFontSize}
          </button>
          
          <button 
            onClick={toggleHighContrast}
            className={`flex items-center gap-2 hover:bg-gray-100 p-2 rounded ${highContrast ? 'bg-gray-200' : ''}`}
          >
            <FaAdjust /> {t.highContrast}
          </button>
          
          <button 
            onClick={resetSettings}
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded"
          >
            <FaRedo /> {t.reset}
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar; 