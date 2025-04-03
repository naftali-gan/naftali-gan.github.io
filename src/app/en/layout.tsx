import { ClientAccessibilityToolbar, ClientFooter, ClientNavigation, DocumentSetup } from '@/components/ClientWrapper';
import { Metadata } from 'next';
import Script from 'next/script';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Naftali Gan | Plants and Gardening Supplies Nursery',
  description: 'Naftali Gan - A nursery providing quality plants and gardening products since 2000',
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="set-html-dir-lang">
        {`
          document.documentElement.lang = 'en';
          document.documentElement.dir = 'ltr';
        `}
      </Script>
      <DocumentSetup />
      <div className="flex flex-col min-h-screen">
        <ClientAccessibilityToolbar locale="en" />
        <ClientNavigation locale="en" />
        <div className="flex-grow">
          {children}
        </div>
        <ClientFooter locale="en" />
      </div>
    </>
  );
} 