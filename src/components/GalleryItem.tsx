'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface GalleryItemProps {
  item: {
    image: string;
    thumbnail: string;
  };
  allItems?: Array<{
    image: string;
    thumbnail: string;
  }>;
  index?: number;
}

export default function GalleryItem({ item, allItems = [], index = 0 }: GalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [currentImage, setCurrentImage] = useState(item.image);

  const buttonClasses = "bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white/70 transition-colors z-10 absolute";

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setCurrentIndex(index);
      setCurrentImage(item.image);
    }, 300);
  };

  const handlePrevImage = () => {
    if (allItems.length <= 1) return;
    const newIndex = currentIndex <= 0 ? allItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(allItems[newIndex].image);
  };

  const handleNextImage = () => {
    if (allItems.length <= 1) return;
    const newIndex = currentIndex >= allItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentImage(allItems[newIndex].image);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen || isClosing) return;
      
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
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
  }, [isModalOpen, isClosing, currentIndex, allItems.length]);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full h-[160px] md:h-[300px]">
          <Image
            src={item.thumbnail}
            alt="Gallery plant image"
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
            className={`relative ${isClosing ? 'animate-modal-fade-out' : 'animate-modal-fade'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={`${buttonClasses} top-4 right-4 w-10 h-10`}
              onClick={!isClosing ? handleClose : undefined}
            >
              <FaTimes size={18} />
            </button>
            
            {allItems.length > 1 && (
              <>
                <button 
                  className={`${buttonClasses} left-4 top-1/2 transform -translate-y-1/2 w-12 h-12`}
                  onClick={(e) => {
                    e.stopPropagation();
                    !isClosing && handlePrevImage();
                  }}
                >
                  <FaChevronLeft size={20} />
                </button>
                
                <button 
                  className={`${buttonClasses} right-4 top-1/2 transform -translate-y-1/2 w-12 h-12`}
                  onClick={(e) => {
                    e.stopPropagation();
                    !isClosing && handleNextImage();
                  }}
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}
            
            <div className="relative">
              <Image
                src={currentImage}
                alt="Plant in gallery"
                className="rounded-xl max-h-[85vh] max-w-[90vw] w-auto h-auto"
                width={1200}
                height={900}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 