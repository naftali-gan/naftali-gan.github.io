import { ClientAccessibilityToolbar, ClientFooter, ClientNavigation, DocumentSetup } from '@/components/ClientWrapper';
import { Metadata } from 'next';
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
    <div dir="ltr" lang="en" className="flex flex-col min-h-screen">
      <DocumentSetup />
      <ClientAccessibilityToolbar locale="en" />
      <ClientNavigation locale="en" />
      <div className="flex-grow">
        {children}
      </div>
      <ClientFooter locale="en" />
    </div>
  );
} 