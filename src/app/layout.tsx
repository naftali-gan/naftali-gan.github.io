import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We don't set lang or dir here, they will be set in the language-specific layouts
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
} 