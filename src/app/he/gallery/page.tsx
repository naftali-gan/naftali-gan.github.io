import GalleryItem from '@/components/GalleryItem';
import { Metadata } from 'next';

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
      image: '/images/hero-background.jpg'
    },
    {
      id: 2,
      title: 'דקל טבעות',
      description: 'דקל גבוה ומרשים שמקורו באוסטרליה',
      image: '/images/product-1.jpg'
    },
    {
      id: 3,
      title: 'דקל זנב שועל',
      description: 'דקל יפהפה בעל מראה טרופי',
      image: '/images/product-2.jpg'
    },
    {
      id: 4,
      title: 'ציקס רבולטה',
      description: 'ציקס ירוק עד שמקורו ביפן',
      image: '/images/product-3.jpg'
    },
    {
      id: 5,
      title: 'עיצוב גינות',
      description: 'דוגמה לגינה שעוצבה על ידי הצוות שלנו',
      image: '/images/hero-background.jpg'
    },
    {
      id: 6,
      title: 'דקל המלך',
      description: 'דקל מרשים שמקורו במרכז ודרום אמריקה',
      image: '/images/product-1.jpg'
    },
    {
      id: 7,
      title: 'עצי פרי',
      description: 'מגוון עצי פרי לגינה ולחצר',
      image: '/images/product-2.jpg'
    },
    {
      id: 8,
      title: 'חממה לגידול צמחים',
      description: 'חממה חדשה שנפתחה לאחרונה',
      image: '/images/product-3.jpg'
    },
    {
      id: 9,
      title: 'זית אירופי',
      description: 'עץ ירוק-עד שמתאים כמעט לכל גינה',
      image: '/images/hero-background.jpg'
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">הגלריה שלנו</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          צפו באוסף תמונות מהמשתלה, מהצמחים שלנו, ומפרויקטים שונים שהשתתפנו בהם לאורך השנים.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
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