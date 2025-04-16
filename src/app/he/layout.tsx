import { ClientAccessibilityToolbar, ClientFooter, ClientNavigation, DocumentSetup } from '@/components/ClientWrapper';
import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'משתלת נפתלי | משתלת דקלים ועצי נוי | כפר יעבץ',
  description: 'משתלת נפתלי - משתלה המספקת דקלים ועצי נוי מאז שנת 2000',
};

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="he" className="flex flex-col min-h-screen">
      <DocumentSetup />
      <ClientAccessibilityToolbar locale="he" />
      <ClientNavigation locale="he" />
      <div className="flex-grow pt-20">
        {children}
      </div>
      <ClientFooter locale="he" />
    </div>
  );
} 