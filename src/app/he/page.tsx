import Carousel from '@/components/Carousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'משתלת נפתלי | משתלה לצמחים ואביזרי גינון',
  description: 'משתלת נפתלי - משתלה המספקת צמחים איכותיים ומוצרי גינון מאז שנת 2000',
};

export default function HebrewHome() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ברוכים הבאים למשתלת נפתלי</h1>
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
          <h2 className="text-3xl font-bold text-center mb-12">הצמחים המובחרים שלנו</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/product-1.jpg"
                  alt="דקל טבעות"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">דקל טבעות</h3>
                <p className="text-sm text-gray-500 mb-2">Archontophoenix cunninghamiana</p>
                <p className="text-sm mb-3">גובה: 15-20 מ'</p>
                <p className="text-sm mb-3">קוטר גזע: 20-50 ס"מ</p>
                <p className="text-sm text-gray-600">דקל גבוה ומרשים שמקורו באוסטרליה. גודלו בינוני עד גדול, גובהו מגיע ל-12 מטרים ואף יותר.</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/product-2.jpg"
                  alt="דקל זנב שועל"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">דקל זנב שועל</h3>
                <p className="text-sm text-gray-500 mb-2">Wodyetia bifurcate</p>
                <p className="text-sm mb-3">גובה: 6-10 מ'</p>
                <p className="text-sm text-gray-600">דקל גבוה, מרשים ויפהפה בעל מראה טרופי. מקורו באוסטרליה. גודלו בינוני עד גדול, גובהו מגיע לכ-10 מטרים.</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/product-3.jpg"
                  alt="זית אירופי"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">זית אירופי</h3>
                <p className="text-sm text-gray-500 mb-2">Olea europaea</p>
                <p className="text-sm mb-3">גובה: 3-9 מ'</p>
                <p className="text-sm text-gray-600">עץ ירוק-עד שמקורו במזרח התיכון, למרות שמו. העץ מדהים ביופיו ומתאים כמעט לכל גינה ונוף.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">אודות המשתלה</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/nursery.jpg"
                alt="משתלת נפתלי"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className="space-y-4 text-right">
              <p className="text-lg">אנחנו במשתלת נפתלי שבכפר יעבץ מתמחים בשיווק ומכירה של עצי דקל בוגרים לשתילה מיידית מסוג טבעות, זנב שועל, דקל המלך, רובליני, משולש, קוקוס וכו' וכן עצי הדרים מעוצבים ומניבים פרי לאכילה.</p>
              <p className="text-lg">בנוסף במשתלה מגוון עצי זית בכל הגדלים ועצי נוי אחרים כגון ציקס טורסאי וציקס רבולטה.</p>
              <p className="text-lg">אנו מוכרים לפרטיים ולעסקים וגם בסיטונאות. המכירה לבתים פרטיים, גננים, ועדי בתים, מוסדות, עיריות, מועצות, פנטהאוזים, בתי מלון וכו'.</p>
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
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-green-50" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">צרו איתנו קשר</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg mb-4">המשתלה ממוקמת במושב כפר יעבץ שבשרון.</p>
              <p className="text-lg mb-4">ניתן לבוא ולבקר אצלנו בשעות הפעילות. ניתן גם לבקר מחוץ לשעות הפעילות בתיאום מראש.</p>
              <p className="text-lg font-semibold mb-2">לכל שאלה ותיאום ביקור, צרו איתנו קשר בטלפונים:</p>
              <p className="text-xl mb-1 font-medium">050-5263429</p>
              <p className="text-xl font-medium">09-7963181</p>
              
              <div className="mt-6">
                <Link
                  href="https://maps.app.goo.gl/Vf2LJzSxn4DGbsSk9"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2 rounded-md text-lg font-medium inline-block"
                >
                  הוראות הגעה
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/location.jpg"
                alt="מיקום המשתלה"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 