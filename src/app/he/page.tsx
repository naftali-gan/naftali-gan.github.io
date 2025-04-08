import Carousel from '@/components/Carousel';
import FeaturedProducts from '@/components/product/FeaturedProducts';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'משתלת נפתלי | משתלת דקלים ועצי נוי | כפר יעבץ',
  description: 'משתלת נפתלי - משתלה המספקת דקלים ועצי נוי מאז שנת 2000',
};

export default function HebrewHome() {
  // Featured products data
  const featuredProducts = [
    { id: '1', image: '/images/products/cunninghamiana.webp', name: 'דקל טבעות' },
    { id: '2', image: '/images/products/bifurcate.webp', name: 'דקל זנב שועל' },
    { id: '3', image: '/images/products/roystonea.webp', name: 'דקל המלך' },
    { id: '4', image: '/images/products/thouarsii.webp', name: 'ציקס טורסאי' },
    { id: '5', image: '/images/products/roebelenii.webp', name: 'דקל רובליני' },
    { id: '6', image: '/images/products/revoluta.webp', name: 'ציקס רבולטה' },
    { id: '7', image: '/images/products/europaea.webp', name: 'זית אירופי' },
    { id: '8', image: '/images/products/limon.webp', name: 'לימון' },
    { id: '9', image: '/images/products/clementina.webp', name: 'קלמנטינה' },
    { id: '10', image: '/images/products/sinensis.webp', name: 'תפוז וושינגטון' },
    { id: '11', image: '/images/products/decaryi.webp', name: 'דקל משולש' },
    { id: '12', image: '/images/products/romanzoffiana.webp', name: 'דקל המלך' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 -z-10">
          <Carousel 
            images={[
              { src: '/images/home/carousel1.webp', alt: 'משתלת נפתלי - תמונה 1' },
              { src: '/images/home/carousel2.webp', alt: 'משתלת נפתלי - תמונה 2' },
              { src: '/images/home/carousel3.webp', alt: 'משתלת נפתלי - תמונה 3' },
            ]}
          />
        </div>
        
        <div className="max-w-4xl z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ברוכים הבאים <span className="md:hidden"><br /></span>למשתלת נפתלי</h1>
          <p className="text-xl md:text-2xl mb-8">משתלה המספקת דקלים ועצי נוי <span className="md:hidden"><br /></span>מאז שנת 2000</p>
          <Link 
            href="#contact" 
            className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            בואו לבקר אותנו
          </Link>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">אודות המשתלה</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/fullsize/gallery12.webp"
                alt="משתלת נפתלי"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className="space-y-4 text-right">
              <p className="text-lg">אנחנו במשתלת נפתלי שבכפר יעבץ מתמחים בשיווק ומכירה של עצי דקל בוגרים לשתילה מיידית מסוג טבעות, זנב שועל, דקל המלך, רובליני, משולש, קוקוס וכו&apos; וכן עצי הדרים מעוצבים ומניבים פרי לאכילה.</p>
              <p className="text-lg">בנוסף במשתלה מגוון עצי זית בכל הגדלים ועצי נוי אחרים כגון ציקס טורסאי וציקס רבולטה.</p>
              <p className="text-lg">אנו מוכרים לפרטיים ולעסקים וגם בסיטונאות. המכירה לבתים פרטיים, גננים, ועדי בתים, מוסדות, עיריות, מועצות, פנטהאוזים, בתי מלון וכו&apos;.</p>
              <p className="text-lg">כל העצים במשתלה נמכרים ללא פערי תיווך, ישירות מהמגדל.</p>
              
              <div className="mt-6">
                <Link
                  href="/he/products"
                  className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2 rounded-md text-lg font-medium inline-block"
                >
                  צפו ברשימת הצמחים שלנו
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <FeaturedProducts
        title="הצמחים המובחרים שלנו"
        ctaText="צפו בכל המוצרים"
        ctaLink="/he/products"
        products={featuredProducts}
        isRTL={true}
      />
      
      {/* Contact Section */}
      <section className="py-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">צרו קשר</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 order-2 md:order-1 text-right">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">בקרו אותנו</h3>
                <p className="mb-2"><strong>כתובת:</strong> הראשונים 26, כפר יעבץ</p>
                <p className="mb-2"><strong>טלפון:</strong> 09-7963181</p>
                <p className="mb-2"><strong>אימייל:</strong> contact@naftalinursery.com</p>
                <p className="mb-4"><strong>שעות פתיחה:</strong> ראשון-שישי 8:00-17:00, שבת סגור</p>
                
                <p className="text-gray-600">לכיוונים או לכל שאלה, אל תהססו להתקשר אלינו!</p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden order-1 md:order-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.0005908483936!2d34.92618397619365!3d32.18966587326275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d41ad6797147f%3A0x38ff7cb06b32804!2sKfar%20Yabetz!5e0!3m2!1sen!2sil!4v1702391520425!5m2!1sen!2sil" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 