import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'אודות | גן נפתלי',
  description: 'למדו על הסיפור והחזון שלנו בגן נפתלי, משתלה מובילה בישראל',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">אודות גן נפתלי</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero-background.jpg"
              alt="גן נפתלי"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">הסיפור שלנו</h2>
            <p className="mb-4">
              גן נפתלי נוסד בשנת 2000 מתוך אהבה עזה לטבע ולגינון. מה שהתחיל כעסק משפחתי קטן, צמח במהלך השנים למשתלה מובילה המספקת צמחים איכותיים ומוצרי גינון לבתים, עסקים, ורשויות מקומיות ברחבי ישראל.
            </p>
            <p className="mb-4">
              המטרה שלנו היא לא רק לספק צמחים יפים, אלא גם לחלוק את הידע והניסיון שלנו עם הלקוחות שלנו כדי לעזור להם ליצור ולשמר גנים יפהפיים ובריאים.
            </p>
            <p>
              אנו מאמינים שכל גינה, גדולה או קטנה, יכולה להפוך לפינת חמד מרהיבה שמספקת הנאה, שלווה, ונחת לבעליה.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">הערכים שלנו</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">איכות</h3>
              <p>אנו מקפידים על בחירת הצמחים הטובים ביותר ומציעים רק מוצרים באיכות גבוהה שאנו מאמינים בהם.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">קיימות</h3>
              <p>אנו מחויבים לשיטות גינון ידידותיות לסביבה ולקידום פרקטיקות גינון בר-קיימא.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">שירות</h3>
              <p>אנו מאמינים בשירות לקוחות מצוין ובמתן ייעוץ מקצועי וידידותי לכל לקוח.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">הצוות שלנו</h2>
          <p className="max-w-3xl mx-auto mb-8">
            הצוות שלנו מורכב ממומחי גינון מנוסים בעלי תשוקה אמיתית לצמחים ולגינון. אנו כאן כדי לעזור לכם ליצור את הגינה המושלמת עבורכם.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
            {[
              { name: 'ישראל ישראלי', position: 'בעלים ומנהל' },
              { name: 'שרה כהן', position: 'מומחית צמחים' },
              { name: 'יוסי לוי', position: 'יועץ גינון' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונה</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 