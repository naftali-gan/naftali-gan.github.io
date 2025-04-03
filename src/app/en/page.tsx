import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Naftali\'s Nursery | Plants and Gardening Supplies',
  description: 'Naftali\'s Nursery - A nursery providing quality plants and gardening products since 2000',
};

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-background.jpg"
            alt="Garden center"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="max-w-4xl z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Naftali's Nursery</h1>
          <p className="text-xl md:text-2xl mb-8">A nursery providing quality plants and gardening products since 2000</p>
          <Link 
            href="#contact" 
            className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            Come visit us
          </Link>
        </div>
      </section>
      
      {/* Latest Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Plants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/product-1.jpg"
                  alt="King Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">King Palm</h3>
                <p className="text-sm text-gray-500 mb-2">Archontophoenix cunninghamiana</p>
                <p className="text-sm mb-3">Height: 15-20 m</p>
                <p className="text-sm mb-3">Trunk diameter: 20-50 cm</p>
                <p className="text-sm text-gray-600">A tall and impressive palm native to Australia. It reaches a height of 12 meters or more.</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/product-2.jpg"
                  alt="Foxtail Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Foxtail Palm</h3>
                <p className="text-sm text-gray-500 mb-2">Wodyetia bifurcate</p>
                <p className="text-sm mb-3">Height: 6-10 m</p>
                <p className="text-sm text-gray-600">A tall, impressive, and beautiful palm with a tropical appearance. Native to Australia.</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/product-3.jpg"
                  alt="European Olive"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">European Olive</h3>
                <p className="text-sm text-gray-500 mb-2">Olea europaea</p>
                <p className="text-sm mb-3">Height: 3-9 m</p>
                <p className="text-sm text-gray-600">An evergreen tree native to the Middle East, despite its name. The tree is amazingly beautiful and suitable for almost any garden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 