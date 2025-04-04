import GalleryItem from '@/components/GalleryItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Naftali\'s Nursery',
  description: 'Discover photos of our nursery and beautiful plants at Naftali\'s Nursery',
};

export default function GalleryPage() {
  // In a real app, these would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: 'Nursery Yard',
      description: 'A view of our nursery yard in the morning hours',
      image: '/images/hero-background.jpg'
    },
    {
      id: 2,
      title: 'King Palm',
      description: 'A tall and impressive palm native to Australia',
      image: '/images/product-1.jpg'
    },
    {
      id: 3,
      title: 'Foxtail Palm',
      description: 'Beautiful palm with a tropical appearance',
      image: '/images/product-2.jpg'
    },
    {
      id: 4,
      title: 'Sago Palm',
      description: 'An evergreen cycad native to Japan',
      image: '/images/product-3.jpg'
    },
    {
      id: 5,
      title: 'Garden Design',
      description: 'A garden designed by our team',
      image: '/images/hero-background.jpg'
    },
    {
      id: 6,
      title: 'Royal Palm',
      description: 'Impressive palm native to Central and South America',
      image: '/images/product-1.jpg'
    },
    {
      id: 7,
      title: 'Fruit Trees',
      description: 'Various fruit trees for garden and yard',
      image: '/images/product-2.jpg'
    },
    {
      id: 8,
      title: 'Plant Greenhouse',
      description: 'New greenhouse recently opened',
      image: '/images/product-3.jpg'
    },
    {
      id: 9,
      title: 'European Olive',
      description: 'Evergreen tree suitable for almost any garden',
      image: '/images/hero-background.jpg'
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          View a collection of photos from our nursery, our plants, and various projects we&apos;ve been involved in over the years.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-4">Want to see more? Follow us on social media!</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-blue-700 hover:text-blue-900">Facebook</a>
            <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
            <a href="#" className="text-red-600 hover:text-red-800">YouTube</a>
          </div>
        </div>
      </div>
    </main>
  );
} 