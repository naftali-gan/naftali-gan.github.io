import Carousel from '@/components/Carousel';
import FeaturedProducts from '@/components/product/FeaturedProducts';
import { globalData } from '@/data/globalData';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Naftali\'s Nursery | Plants and Gardening Supplies',
  description: 'Naftali\'s Nursery - A nursery providing quality plants and gardening products since 2000',
};

export default function EnglishHome() {
  // Featured products data
  const featuredProducts = [
    { id: '1', image: '/images/products/areca.webp', name: 'Areca Palm' },
    { id: '2', image: '/images/products/cunninghamiana.webp', name: 'King Palm' },
    { id: '3', image: '/images/products/bifurcate.webp', name: 'Foxtail Palm' },
    { id: '4', image: '/images/products/roystonea.webp', name: 'Royal Palm' },
    { id: '5', image: '/images/products/thouarsii.webp', name: 'Cycas Thouarsii' },
    { id: '6', image: '/images/products/roebelenii.webp', name: 'Robelini Palm' },
    { id: '7', image: '/images/products/revoluta.webp', name: 'Cycas Revoluta' },
    { id: '8', image: '/images/products/europaea.webp', name: 'European Olive' },
    { id: '9', image: '/images/products/limon.webp', name: 'Lemon Tree' },
    { id: '10', image: '/images/products/clementina.webp', name: 'Clementine Tree' },
    { id: '11', image: '/images/products/sinensis.webp', name: 'Washington Orange' },
    { id: '12', image: '/images/products/decaryi.webp', name: 'Triangle Palm' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 -z-10">
          <Carousel 
            images={[
              { src: '/images/home/carousel1.webp', alt: 'Nursery entrance with palm trees' },
              { src: '/images/home/carousel2.webp', alt: 'Palm tree collection' },
              { src: '/images/home/carousel3.webp', alt: 'Ornamental plants display' },
            ]}
          />
        </div>
        
        <div className="max-w-4xl z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Naftali&apos;s Nursery</h1>
          <p className="text-xl md:text-2xl mb-8">A nursery providing quality plants and gardening products since 2000</p>
          <Link 
            href="#contact" 
            className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            Come visit us
          </Link>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Nursery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">At Naftali&apos;s Nursery in Kfar Yabetz, we specialize in marketing and selling mature palm trees for immediate planting, including Archontophoenix, Foxtail Palm, King Palm, Robelini, Triangle Palm, Coconut Palm, and more. We also offer shaped citrus trees that bear edible fruit.</p>
              <p className="text-lg">Additionally, the nursery has a variety of olive trees in all sizes and other ornamental trees such as Cycas thouarsii and Cycas revoluta.</p>
              <p className="text-lg">We sell to individuals and businesses, as well as wholesale. Our customers include private homes, gardeners, building committees, institutions, municipalities, councils, penthouses, hotels, and more.</p>
              <p className="text-lg">All trees in the nursery are sold without intermediary gaps, directly from the grower.</p>
              
              <div className="mt-6">
                <Link
                  href="/en/products"
                  className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2 rounded-md text-lg font-medium inline-block"
                >
                  View our plant list
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/fullsize/gallery12.webp"
                alt="Nursery plants display"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <FeaturedProducts
        title="Our Featured Plants"
        ctaText="View All Products"
        ctaLink="/en/products"
        products={featuredProducts}
      />
      
      {/* Contact Section */}
      <section className="py-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe 
                src={globalData.googleMapsIframeUrl}
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="mb-2"><strong>Address:</strong> Kfar Yabetz, Central District, Israel</p>
                <p className="mb-2"><strong>Phone:</strong> {globalData.mainPhone}</p>
                <p className="mb-2"><strong>Mobile:</strong> {globalData.mobilePhone}</p>
                <p className="mb-2"><strong>Email:</strong> {globalData.email}</p>
                <p className="mb-4"><strong>Hours:</strong> Sunday-Friday 8:00 AM - 5:00 PM, Saturday Closed</p>
                
                <p className="text-gray-600">For directions or any questions, please don&apos;t hesitate to call us!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 