import type { Metadata } from 'next';
import '../scss/style.scss';

import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MoGo',
  description: 'Generated by create next app',
  keywords: 'word1, word2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-RobotoRegular h-screen grid grid-rows-[auto_1fr_auto] dark:bg-slate-800 dark:text-white">
        <Header />
        <div className="pt-13" id="root">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
