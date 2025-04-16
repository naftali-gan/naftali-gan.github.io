import GalleryItem from '@/components/GalleryItem';
import { galleryItems } from '@/data/galleryData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גלריה | המשתלה של נפתלי',
  description: 'צפו בתמונות מהמשתלה שלנו והצמחים היפים שלנו במשתלה של נפתלי',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">הגלריה שלנו</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          צפו באוסף תמונות מהמשתלה, מהצמחים שלנו, ומפרויקטים שונים שהשתתפנו בהם לאורך השנים.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index} 
              item={item} 
              allItems={galleryItems} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </main>
  );
} 