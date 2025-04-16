'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GalleryItemProps {
  item: {
    image: string;
    thumbnail: string;
  };
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen && !isClosing) {
        handleClose();
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
  }, [isModalOpen, isClosing]);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-72">
          <Image
            src={item.thumbnail}
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {isModalOpen && (
        <div 
          className={`fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-backdrop-fade-out' : 'animate-backdrop-fade'}`} 
          onClick={!isClosing ? handleClose : undefined}
        >
          <div 
            className={`relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-xl shadow-2xl ${isClosing ? 'animate-modal-fade-out' : 'animate-modal-fade'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-black hover:bg-white transition-colors"
              onClick={!isClosing ? handleClose : undefined}
            >
              ✕
            </button>
            <div className="relative h-[85vh]">
              <Image
                src={item.image}
                alt="Gallery image"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 