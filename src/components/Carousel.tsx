'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type CarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
  className?: string;
  overlayClassName?: string;
};

export default function Carousel({
  images,
  interval = 5000,
  className = "",
  overlayClassName = "bg-black/30"
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 