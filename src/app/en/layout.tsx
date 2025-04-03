import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naftali Gan | Plants and Gardening Supplies',
  description: 'Naftali Gan - A nursery providing quality plants and gardening products since 2000',
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="flex flex-col min-h-screen">
          <AccessibilityToolbar locale="en" />
          <Navigation locale="en" />
          <main className="flex-grow">{children}</main>
          <Footer locale="en" />
        </div>
      </body>
    </html>
  );
} 