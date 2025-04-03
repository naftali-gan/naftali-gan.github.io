import { Metadata } from 'next';
import Image from 'next/image';

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
      image: '/images/hero-background.jpg',
      category: 'Nursery'
    },
    {
      id: 2,
      title: 'King Palm',
      description: 'A tall and impressive palm native to Australia',
      image: '/images/product-1.jpg',
      category: 'Palms'
    },
    {
      id: 3,
      title: 'Foxtail Palm',
      description: 'Beautiful palm with a tropical appearance',
      image: '/images/product-2.jpg',
      category: 'Palms'
    },
    {
      id: 4,
      title: 'Sago Palm',
      description: 'An evergreen cycad native to Japan',
      image: '/images/product-3.jpg',
      category: 'Plants'
    },
    {
      id: 5,
      title: 'Garden Design',
      description: 'A garden designed by our team',
      image: '/images/hero-background.jpg',
      category: 'Design'
    },
    {
      id: 6,
      title: 'Royal Palm',
      description: 'Impressive palm native to Central and South America',
      image: '/images/product-1.jpg',
      category: 'Palms'
    },
    {
      id: 7,
      title: 'Fruit Trees',
      description: 'Various fruit trees for garden and yard',
      image: '/images/product-2.jpg',
      category: 'Trees'
    },
    {
      id: 8,
      title: 'Plant Greenhouse',
      description: 'New greenhouse recently opened',
      image: '/images/product-3.jpg',
      category: 'Nursery'
    },
    {
      id: 9,
      title: 'European Olive',
      description: 'Evergreen tree suitable for almost any garden',
      image: '/images/hero-background.jpg',
      category: 'Trees'
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          View a collection of photos from our nursery, our plants, and various projects we&apos;ve been involved in over the years.
        </p>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-full">All</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">Nursery</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">Palms</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">Plants</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">Trees</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">Design</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105">
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                  <span className="inline-block mt-2 text-xs bg-green-600 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
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