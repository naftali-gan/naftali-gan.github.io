import GalleryItem from '@/components/GalleryItem';
import galleryItems from '@/data/galleryData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גלריה | משתלת נפתלי',
  description: 'גלו תמונות מהמשתלה והצמחים המרהיבים שלנו במשתלת נפתלי',
};

export default function GalleryPage() {
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