'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GalleryItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-72">
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black hover:bg-gray-200"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 