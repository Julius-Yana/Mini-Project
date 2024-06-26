import type { Metadata } from 'next';
import { Viaoda_Libre } from 'next/font/google';
import './globals.css';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PrelineScript from '@/components/PrelineScript';

const inter = Viaoda_Libre({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kitatiketin',
  description: 'tiketin impianmu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <div>
          {children}
          </div>
        <Footer />
      </body>
      <PrelineScript/>
    </html>
  );
}
