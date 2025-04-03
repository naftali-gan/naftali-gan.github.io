import { Open_Sans } from "next/font/google";
import "./globals.css";

// Configure Open Sans font with both Latin and Hebrew subsets
const openSans = Open_Sans({ 
  subsets: ["latin", "hebrew"],
  variable: '--font-open-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We don't set lang or dir here, they will be set in the language-specific layouts
  return (
    <html suppressHydrationWarning className={openSans.variable}>
      <head />
      <body className={openSans.className}>{children}</body>
    </html>
  );
} 