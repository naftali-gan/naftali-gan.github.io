import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// A basic function that determines which locale we're in based on the URL
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="js-loading">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 