import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גן נפתלי | משתלה לצמחים ואביזרי גינון',
  description: 'גן נפתלי - משתלה המספקת צמחים איכותיים ומוצרי גינון מאז שנת 2000',
};

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <div className="flex flex-col min-h-screen">
          <AccessibilityToolbar locale="he" />
          <Navigation locale="he" />
          <main className="flex-grow">{children}</main>
          <Footer locale="he" />
        </div>
      </body>
    </html>
  );
} 