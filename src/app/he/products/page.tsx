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
      name: 'דקלים וצמחים',
      description: 'מגוון דקלים וצמחים איכותיים לעיצוב הגינה והבית',
      products: [
        { 
          id: 1, 
          name: 'דקל טבעות', 
          image: '/images/product-1.jpg',
          scientificName: 'Archontophoenix cunninghamiana',
          height: '15-20 מ\'',
          diameter: '20-50 ס"מ',
          details: 'דקל גבוה ומרשים שמקורו באוסטרליה. גודלו בינוני עד גדול, גובהו מגיע ל-12 מטרים ואף יותר. קצב צמיחתו בינוני עד מהיר ודורש כמות השקייה בינונית.'
        },
        { 
          id: 2, 
          name: 'דקל זנב שועל', 
          image: '/images/product-2.jpg',
          scientificName: 'Wodyetia bifurcate',
          height: '6-10 מ\'',
          details: 'דקל גבוה, מרשים ויפהפה בעל מראה טרופי. מקורו באוסטרליה. גודלו בינוני עד גדול, גובהו מגיע לכ-10 מטרים. קצב צמיחתו בינוני עד מהיר ודורש כמות השקייה בינונית.'
        },
        { 
          id: 3, 
          name: 'דקל המלך', 
          image: '/images/product-3.jpg',
          scientificName: 'Roystonea',
          height: '15-20 מ\'',
          diameter: '40-70 ס"מ',
          details: 'דקל המלך, שמקורו במרכז ודרום אמריקה, הינו דקל יפהפה ובעל נוכחות. גודלו בינוני עד גדול, גובהו יכול להגיע ל-20 מטרים ואף יותר. קצב צמיחתו בינוני ודורש כמות השקייה בינונית.'
        },
        { 
          id: 4, 
          name: 'ציקס טורסאי', 
          image: '/images/product-1.jpg',
          scientificName: 'Cycas thouarsii',
          height: '1-2 מ\'',
          details: 'ציקס ירוק-עד שמקורו במדגסקר. גודלו קטן – בינוני, גובהו מגיע לכ-2 מטרים ועליו משתרעים לרוחב של 1.5-2 מטרים. קצב צמיחתו בינוני ודורש כמות השקייה בינונית.'
        },
        { 
          id: 5, 
          name: 'דקל רובליני', 
          image: '/images/product-2.jpg',
          scientificName: 'Phoenix roebelenii',
          height: '2-3 מ\'',
          details: 'דקל קטן וקל מאוד לגידול וטיפוח. מגיע לגובה של כ-2-3 מטרים ועליו משתרעים לרוחב של כ-2 מטרים. קצב צמיחתו בינוני ודורש כמות השקייה בינונית.'
        },
        { 
          id: 6, 
          name: 'ציקס רבולטה', 
          image: '/images/product-3.jpg',
          scientificName: 'Cycas revoluta',
          height: '1.5-2 מ\'',
          details: 'ציקס ירוק עד שמקורו ביפן. מתאפיין במנה סימטרי למדי ובעל עלים ירוקים ומבריקים. גובהו מגיע לכ-2 מטרים ועליו משתרעים לרוחב של כ-1.5 מטרים. קצב צמיחתו איטי ודורש כמות השקייה נמוכה עד בינונית.'
        },
      ]
    },
    {
      id: 2,
      name: 'דקלים נוספים',
      description: 'מבחר דקלים ייחודיים לעיצוב הגינה שלכם',
      products: [
        { 
          id: 7, 
          name: 'דקל משולש', 
          image: '/images/product-1.jpg',
          scientificName: 'Dypsis decaryi',
          height: '5-6 מ\'',
          details: 'דקל שמקורו בדרום מדגסקר. גודלו בינוני, גובהו כ-5-6 מטרים ועליו יכולים להגיע לאורך של כ-3 מטרים. קצב צמיחתו בינוני עד מהיר ודורש כמות השקייה בינונית.'
        },
        { 
          id: 8, 
          name: 'דקל קוקוס', 
          image: '/images/product-2.jpg',
          scientificName: 'Syagrus romanzoffiana',
          height: '15-20 מ\'',
          diameter: '20-50 ס"מ',
          details: 'דקל בעל מראה טרופי שמקורו ביערות דרום אמריקה. גודלו בינוני עד גדול, גובהו לרוב מגיע לכ-15 מטר ורוחב הגזע משתנה, בין 20 ל-50 ס"מ. דקל הקוקוס הינו עץ עמיד וקצב צמיחתו מהיר, ודורש כמות השקייה בינונית.'
        },
      ]
    },
    {
      id: 3,
      name: 'עצי פרי',
      description: 'עצי פרי איכותיים לגינה ולחצר',
      products: [
        { 
          id: 9, 
          name: 'זית אירופי', 
          image: '/images/product-3.jpg',
          scientificName: 'Olea europaea',
          height: '3-9 מ\'',
          details: 'עץ ירוק-עד שמקורו במזרח התיכון, למרות שמו. העץ מדהים ביופיו ומתאים כמעט לכל גינה ונוף. גובהו משתנה, בין 3 ל-9 מטר, תלוי בגיל ובזן. קצב צמיחתו איטי ודורש כמות השקייה נמוכה עד בינונית.'
        },
        { 
          id: 10, 
          name: 'לימון', 
          image: '/images/product-1.jpg',
          scientificName: 'Citrus × limon',
          height: '1.5-2.5 מ\'',
          details: 'עץ ירוק-עד שמקורו באסיה. גובהו בין כ-2 מטרים. קצב צמיחתו בינוני ודורש כמות השקייה בינונית. הלימון מלבלב ומניב פירות כמעט בכל חודשי השנה.'
        },
        { 
          id: 11, 
          name: 'קלמנטינה', 
          image: '/images/product-2.jpg',
          scientificName: 'Citrus × clementina',
          height: '3-4 מ\'',
          details: 'הקלמנטינה הינה הכלאה בין זן של מנדרינה לבין חושחש (תפוז מר). גובה העץ יכול להגיע ל-4 מטרים ויותר. קצב צמיחתו בינוני ודורש כמות השקייה בינונית עד גבוהה.'
        },
        { 
          id: 12, 
          name: 'תפוז וושינגטון', 
          image: '/images/product-3.jpg',
          scientificName: 'Citrus sinensis',
          height: '2-3 מ\'',
          details: 'תפוז וושינגטון, הידוע גם בשם תפוז טבורי, הינו הכלאה טבעית של התפוז שהתפתחה בברזיל. גובה העץ הינו כ-3 מטרים ויותר. קצב צמיחתו בינוני ודורש כמות השקייה בינונית עד גבוהה.'
        },
      ]
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">הצמחים שלנו</h1>
        <p className="text-center max-w-3xl mx-auto mb-12">
          אנו מציעים מגוון רחב של צמחים איכותיים, עצים, דקלים ועצי פרי. כל המוצרים שלנו נבחרים בקפידה כדי להבטיח את שביעות רצון הלקוחות שלנו.
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
                    <p className="text-sm text-gray-500 mb-2">{product.scientificName}</p>
                    <p className="text-sm mb-3">גובה: {product.height}</p>
                    {product.diameter && <p className="text-sm mb-3">קוטר גזע: {product.diameter}</p>}
                    <p className="text-sm text-gray-600 mb-4">{product.details}</p>
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