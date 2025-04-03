import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'גלריה | משתלת נפתלי',
  description: 'גלו תמונות מהמשתלה והצמחים המרהיבים שלנו במשתלת נפתלי',
};

export default function GalleryPage() {
  // In a real app, these would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: 'חצר המשתלה',
      description: 'מבט על חצר המשתלה שלנו בשעות הבוקר',
      image: '/images/hero-background.jpg',
      category: 'משתלה'
    },
    {
      id: 2,
      title: 'צמחי פנים',
      description: 'מגוון צמחי פנים מיוחדים',
      image: '/images/product-1.jpg',
      category: 'צמחים'
    },
    {
      id: 3,
      title: 'פרחי גינה',
      description: 'פרחים ססגוניים לגינה',
      image: '/images/product-2.jpg',
      category: 'פרחים'
    },
    {
      id: 4,
      title: 'אזור הקקטוסים',
      description: 'אוסף הקקטוסים והסוקולנטים שלנו',
      image: '/images/product-3.jpg',
      category: 'צמחים'
    },
    {
      id: 5,
      title: 'עיצוב גינות',
      description: 'דוגמה לגינה שעוצבה על ידי הצוות שלנו',
      image: '/images/hero-background.jpg',
      category: 'עיצוב'
    },
    {
      id: 6,
      title: 'אירוע במשתלה',
      description: 'אירוע חודשי במשתלה',
      image: '/images/product-1.jpg',
      category: 'אירועים'
    },
    {
      id: 7,
      title: 'עציצים מעוצבים',
      description: 'עציצים ייחודיים בעיצוב אישי',
      image: '/images/product-2.jpg',
      category: 'עיצוב'
    },
    {
      id: 8,
      title: 'בית חם לצמחים',
      description: 'חממה חדשה שנפתחה לאחרונה',
      image: '/images/product-3.jpg',
      category: 'משתלה'
    },
    {
      id: 9,
      title: 'שתילים צעירים',
      description: 'שתילים חדשים לעונה הקרובה',
      image: '/images/hero-background.jpg',
      category: 'צמחים'
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">הגלריה שלנו</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          צפו באוסף תמונות מהמשתלה, מהצמחים שלנו, ומפרויקטים שונים שהשתתפנו בהם לאורך השנים.
        </p>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-full">הכל</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">משתלה</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">צמחים</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">פרחים</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">עיצוב</button>
          <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full">אירועים</button>
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
          <p className="mb-4">רוצים לראות עוד? עקבו אחרינו ברשתות החברתיות!</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-blue-700 hover:text-blue-900">פייסבוק</a>
            <a href="#" className="text-pink-600 hover:text-pink-800">אינסטגרם</a>
            <a href="#" className="text-red-600 hover:text-red-800">יוטיוב</a>
          </div>
        </div>
      </div>
    </main>
  );
} 