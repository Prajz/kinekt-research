import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { allItems, levels } from '@/lib/library';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const readingCount = allItems.length;
const levelCount = levels.length;

export const metadata: Metadata = {
  title: 'Kinekt Research | Free Finance Learning',
  description:
    `A free library for learning investing and quantitative finance from first principles. ${readingCount} readings across ${levelCount} progressive levels.`,
  keywords: [
    'finance education',
    'investing library',
    'quantitative finance',
    'value investing',
    'free education',
  ],
  authors: [{ name: 'Kinekt Research' }],
  metadataBase: new URL('https://kinektresearch.com'),
  openGraph: {
    title: 'Kinekt Research',
    description:
      'Free finance learning in investing and quantitative finance. From Menger to machine learning.',
    url: 'https://kinektresearch.com',
    siteName: 'Kinekt Research',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinekt Research',
    description:
      `Free finance learning. ${readingCount} readings across ${levelCount} levels — from Menger to machine learning.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} style={{ backgroundColor: '#f7f7f5' }}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
