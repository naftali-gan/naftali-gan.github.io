import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גן נפתלי | משתלה לצמחים ואביזרי גינון',
  description: 'גן נפתלי - משתלה המספקת צמחים איכותיים ומוצרי גינון מאז שנת 2000',
};

export default function HebrewHome() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ברוכים הבאים לגן נפתלי</h1>
          <p className="text-xl md:text-2xl mb-8">משתלה המספקת צמחים איכותיים ומוצרי גינון מאז שנת 2000</p>
          <Link 
            href="#contact" 
            className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            בואו לבקר אותנו
          </Link>
        </div>
      </section>
      
      {/* Latest Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">המוצרים החדשים שלנו</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards would go here */}
            {[1, 2, 3].map((product) => (
              <div key={product} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src={`/images/product-${product}.jpg`}
                    alt={`Product ${product}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">מוצר {product}</h3>
                  <p className="text-gray-600 mb-4">תיאור המוצר יופיע כאן.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">₪{product * 50}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                      פרטים נוספים
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 