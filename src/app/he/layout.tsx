import { ClientAccessibilityToolbar, ClientFooter, ClientNavigation, DocumentSetup } from '@/components/ClientWrapper';
import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'משתלת נפתלי | משתלה לצמחים ואביזרי גינון',
  description: 'משתלת נפתלי - משתלה המספקת צמחים איכותיים ומוצרי גינון מאז שנת 2000',
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
      <div className="flex-grow">
        {children}
      </div>
      <ClientFooter locale="he" />
    </div>
  );
} 