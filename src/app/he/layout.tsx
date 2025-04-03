import { ClientAccessibilityToolbar, ClientFooter, ClientNavigation, DocumentSetup } from '@/components/ClientWrapper';
import { Metadata } from 'next';
import Script from 'next/script';
import '../globals.css';

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
    <>
      <Script id="set-html-dir-lang">
        {`
          document.documentElement.lang = 'he';
          document.documentElement.dir = 'rtl';
        `}
      </Script>
      <DocumentSetup />
      <div className="flex flex-col min-h-screen">
        <ClientAccessibilityToolbar locale="he" />
        <ClientNavigation locale="he" />
        <div className="flex-grow">
          {children}
        </div>
        <ClientFooter locale="he" />
      </div>
    </>
  );
} 