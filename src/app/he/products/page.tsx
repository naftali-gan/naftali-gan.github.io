import ProductCard from "@/components/product/ProductCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'הצמחים שלנו | משתלת נפתלי',
  description: 'גלו את המבחר הרחב של צמחים איכותיים, עצים, דקלים ועצי פרי.',
};

// Define product type
interface Product {
  id: number;
  name: string;
  image: string;
  scientificName: string;
  height: string;
  diameter?: string; // Make diameter optional
  details: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  products: Product[];
}

export default function ProductsPage() {
  // Mock product data - in a real app, this would come from a database or API
  const categories: Category[] = [
    {
      id: 1,
      name: "דקלים",
      description: "דקלים מרהיבים המוסיפים מראה טרופי לכל מרחב.",
      products: [
        { 
          id: 1, 
          name: "דקל טבעות", 
          image: "/images/products/cunninghamiana.webp",
          scientificName: "Archontophoenix cunninghamiana",
          height: "5-10 מ'",
          diameter: "30-40 ס\"מ",
          details: "דקל טבעות הינו דקל אלגנטי, בעל גזע יחיד וחלק בצבע אפור בהיר. הוא מפגין כתר חינני וכהה של עלים נוצתיים."
        },
        { 
          id: 2, 
          name: "דקל זנב שועל", 
          image: "/images/products/bifurcate.webp",
          scientificName: "Wodyetia bifurcata",
          height: "6-10 מ'",
          diameter: "25-35 ס\"מ",
          details: "דקל זנב שועל ידוע בעלים הייחודיים שלו הדומים לזנב שועל. יש לו גזע חלק בצבע אפור בהיר והוא צומח במהירות יחסית."
        },
        { 
          id: 3, 
          name: "דקל המלך", 
          image: "/images/products/roystonea.webp",
          scientificName: "Roystonea regia",
          height: "15-20 מ'",
          diameter: "40-50 ס\"מ",
          details: "דקל המלך הוא דקל גבוה ומלכותי עם גזע חלק בצבע אפור בהיר בעל התנפחות מובהקת. הוא מתהדר בעלים נוצתיים אלגנטיים ונפוץ בנטיעת שדרות."
        },
        { 
          id: 4, 
          name: "דקל רובליני", 
          image: "/images/products/roebelenii.webp",
          scientificName: "Phoenix roebelenii",
          height: "2-3 מ'",
          diameter: "15-20 ס\"מ",
          details: "דקל רובליני הוא דקל קטן ואלגנטי עם גזע דק ועלים מקושתים עדינים. הוא מושלם למרחבים קטנים ולשתילה במכלים."
        },
        { 
          id: 5, 
          name: "דקל משולש", 
          image: "/images/products/decaryi.webp",
          scientificName: "Dypsis decaryi",
          height: "6-10 מ'",
          diameter: "25-35 ס\"מ",
          details: "דקל משולש קרוי על שם הסידור המשולש המובהק של העלים שלו. יש לו מראה פיסולי ייחודי שהופך אותו לבולט באזור הנטיעה."
        },
        { 
          id: 6, 
          name: "דקל המלכה", 
          image: "/images/products/romanzoffiana.webp",
          scientificName: "Syagrus romanzoffiana",
          height: "10-15 מ'",
          diameter: "30-40 ס\"מ",
          details: "דקל המלכה הוא דקל פופולרי וצומח במהירות עם גזע חלק בצבע אפור ועלים נוצתיים ארוכים. הוא משמש בהרחבה בעיצוב נוף בשל המראה האלגנטי שלו."
        }
      ]
    },
    {
      id: 2,
      name: "עצי נוי",
      description: "עצי נוי מרהיבים להעשרת האסתטיקה של הגינה שלכם.",
      products: [
        { 
          id: 7, 
          name: "ציקס טורסאי", 
          image: "/images/products/thouarsii.webp",
          scientificName: "Cycas thouarsii",
          height: "2-5 מ'",
          diameter: "20-30 ס\"מ",
          details: "ציקס טורסאי הוא ציקאד צומח באיטיות עם גזע עבה וקשקשי וכתר של עלים נוצתיים קשיחים. זהו צמח עתיק בעל מראה פרהיסטורי."
        },
        { 
          id: 8, 
          name: "ציקס רבולטה", 
          image: "/images/products/revoluta.webp",
          scientificName: "Cycas revoluta",
          height: "2-3 מ'",
          diameter: "20-30 ס\"מ",
          details: "ציקס רבולטה, המכונה גם דקל סאגו, אינו דקל אמיתי אלא ציקאד. יש לו גזע עבה ושעיר ועלים קשיחים בצבע ירוק כהה."
        },
        { 
          id: 9, 
          name: "זית אירופי", 
          image: "/images/products/europaea.webp",
          scientificName: "Olea europaea",
          height: "8-15 מ'",
          diameter: "30-60 ס\"מ",
          details: "הזית האירופי הוא עץ ארוך חיים וצומח באיטיות עם גזע מעוקל ומפותל ועלים בצבע ירוק-כסף. הוא מניב זיתים למאכל ומוערך בשל המראה הדקורטיבי שלו."
        }
      ]
    },
    {
      id: 3,
      name: "עצי פרי",
      description: "עצי פרי פוריים המוסיפים יופי ושפע לגינה שלכם.",
      products: [
        { 
          id: 10, 
          name: "לימון", 
          image: "/images/products/limon.webp",
          scientificName: "Citrus limon",
          height: "3-6 מ'",
          details: "עץ הלימון הוא עץ ירוק-עד קטן המניב פרחים לבנים ריחניים ופירות צהובים. הוא מושלם לעציצים או לגינות ומספק עניין לאורך כל השנה."
        },
        { 
          id: 11, 
          name: "קלמנטינה", 
          image: "/images/products/clementina.webp",
          scientificName: "Citrus clementina",
          height: "2-4 מ'",
          details: "עץ הקלמנטינה הוא עץ הדר קטן וחסר קוצים המניב פירות מתוקים וקלים לקילוף. יש לו עלים ירוקים כהים ומבריקים ופרחים לבנים ריחניים."
        },
        { 
          id: 12, 
          name: "תפוז וושינגטון", 
          image: "/images/products/sinensis.webp",
          scientificName: "Citrus sinensis",
          height: "3-5 מ'",
          details: "תפוז וושינגטון, הידוע גם בשם תפוז טבורי, הוא זן תפוז מתוק וחסר גרעינים. לעץ יש כתר עגול של עלים ירוקים כהים ומבריקים."
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
                <ProductCard
                  key={product.id}
                  imageSrc={product.image}
                  name={product.name}
                  scientificName={product.scientificName}
                  height={`גובה: ${product.height}`}
                  diameter={product.diameter ? `קוטר גזע: ${product.diameter}` : undefined}
                  details={product.details}
                  showDetails={true}
                  className="text-right"
                />
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