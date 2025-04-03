import Carousel from '@/components/Carousel';
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
          <Carousel 
            images={[
              { src: '/images/home/carousel1.webp', alt: 'Naftali\'s Nursery - Image 1' },
              { src: '/images/home/carousel2.webp', alt: 'Naftali\'s Nursery - Image 2' },
              { src: '/images/home/carousel3.webp', alt: 'Naftali\'s Nursery - Image 3' },
            ]}
          />
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/cunninghamiana.webp"
                  alt="King Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">King Palm</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/bifurcate.webp"
                  alt="Foxtail Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Foxtail Palm</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/roystonea.webp"
                  alt="Royal Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Royal Palm</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/thouarsii.webp"
                  alt="Cycas Thouarsii"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Cycas Thouarsii</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/roebelenii.webp"
                  alt="Robelini Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Robelini Palm</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/revoluta.webp"
                  alt="Cycas Revoluta"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Cycas Revoluta</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/europaea.webp"
                  alt="European Olive"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">European Olive</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/limon.webp"
                  alt="Lemon Tree"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Lemon Tree</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/clementina.webp"
                  alt="Clementine Tree"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Clementine Tree</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/sinensis.webp"
                  alt="Washington Orange"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Washington Orange</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/decaryi.webp"
                  alt="Triangle Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Triangle Palm</h3>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/products/romanzoffiana.webp"
                  alt="Queen Palm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">Queen Palm</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link
              href="/en/products"
              className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-md text-lg font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Nursery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">At Naftali's Nursery in Kfar Yabetz, we specialize in marketing and selling mature palm trees for immediate planting, including Archontophoenix, Foxtail Palm, King Palm, Robelini, Triangle Palm, Coconut Palm, and more. We also offer shaped citrus trees that bear edible fruit.</p>
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
                src="/images/nursery.jpg"
                alt="Naftali's Nursery"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-green-50" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/location.jpg"
                alt="Nursery Location"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg mb-4">The nursery is located in Kfar Yabetz in the Sharon region.</p>
              <p className="text-lg mb-4">You can visit us during opening hours or outside of opening hours by prior arrangement.</p>
              <p className="text-lg font-semibold mb-2">For any questions and to arrange a visit, contact us by phone:</p>
              <p className="text-xl mb-1 font-medium">050-5263429</p>
              <p className="text-xl font-medium">09-7963181</p>
              
              <div className="mt-6">
                <Link
                  href="https://maps.app.goo.gl/Vf2LJzSxn4DGbsSk9"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2 rounded-md text-lg font-medium inline-block"
                >
                  Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 