import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://renekuhm.dev'),
  title: {
    default: 'René Kuhm | Desarrollador Web Full Stack',
    template: '%s | René Kuhm',
  },
  description:
    'Soluciones tecnológicas innovadoras para transformar tu negocio digital.',
  keywords: [
    'desarrollo web',
    'full stack',
    'next.js',
    'react',
    'typescript',
    'software',
  ],
  authors: [{ name: 'René Kuhm', url: 'https://renekuhm.dev' }],
  alternates: {
    canonical: 'https://renekuhm.dev',
    languages: {
      'es-CL': 'https://renekuhm.dev',
      'en-US': 'https://renekuhm.dev/en',
    },
  },
  openGraph: {
    title: 'René Kuhm | Desarrollador Web Full Stack',
    description: 'Soluciones tecnológicas innovadoras.',
    url: 'https://renekuhm.dev',
    siteName: 'René Kuhm Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'René Kuhm - Desarrollador Web Full Stack',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'René Kuhm | Desarrollador Web Full Stack',
    description: 'Soluciones tecnológicas innovadoras.',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://renekuhm.dev" />
        <link rel="alternate" hrefLang="es-CL" href="https://renekuhm.dev" />
        <link rel="alternate" hrefLang="en-US" href="https://renekuhm.dev/en" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
