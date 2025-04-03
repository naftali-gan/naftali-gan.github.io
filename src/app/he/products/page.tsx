import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'מוצרים | משתלת נפתלי',
  description: 'גלו את מגוון הצמחים ומוצרי הגינון האיכותיים שלנו במשתלת נפתלי',
};

export default function ProductsPage() {
  // Mock product data - in a real app, this would come from a database or API
  const categories = [
    {
      id: 1,
      name: 'צמחי בית',
      description: 'צמחים מושלמים לגידול בתוך הבית',
      products: [
        { id: 1, name: 'פילודנדרון', price: 79, image: '/images/product-1.jpg' },
        { id: 2, name: 'סחלב', price: 120, image: '/images/product-2.jpg' },
        { id: 3, name: 'קקטוס', price: 45, image: '/images/product-3.jpg' },
      ]
    },
    {
      id: 2,
      name: 'צמחי גינה',
      description: 'צמחים שיהפכו את הגינה שלכם לגן עדן',
      products: [
        { id: 4, name: 'ורדים', price: 65, image: '/images/product-1.jpg' },
        { id: 5, name: 'לבנדר', price: 50, image: '/images/product-2.jpg' },
        { id: 6, name: 'יסמין', price: 85, image: '/images/product-3.jpg' },
      ]
    },
    {
      id: 3,
      name: 'אביזרי גינון',
      description: 'כל מה שצריך כדי לטפח את הגינה שלכם',
      products: [
        { id: 7, name: 'כלי גינון', price: 120, image: '/images/product-1.jpg' },
        { id: 8, name: 'אדניות', price: 90, image: '/images/product-2.jpg' },
        { id: 9, name: 'מערכות השקייה', price: 250, image: '/images/product-3.jpg' },
      ]
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">המוצרים שלנו</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          אנו מציעים מגוון רחב של צמחים איכותיים, עצים, שיחים, פרחים, ואביזרי גינון. כל המוצרים שלנו נבחרים בקפידה כדי להבטיח את שביעות רצון הלקוחות שלנו.
        </p>
        
        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">₪{product.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded">
                        פרטים נוספים
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">מחפשים משהו מיוחד?</h2>
          <p className="mb-6">אם אינכם מוצאים את מה שאתם מחפשים, אנא צרו איתנו קשר ונשמח לעזור.</p>
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-md text-lg font-medium">
            צרו קשר
          </button>
        </div>
      </div>
    </main>
  );
} 