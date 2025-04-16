import GalleryItem from '@/components/GalleryItem';
import { galleryItems } from '@/data/galleryData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Naftali\'s Nursery',
  description: 'Discover photos of our nursery and beautiful plants at Naftali\'s Nursery',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          View a collection of photos from our nursery, our plants, and various projects we&apos;ve been involved in over the years.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index} 
              item={item} 
              allItems={galleryItems} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </main>
  );
} 