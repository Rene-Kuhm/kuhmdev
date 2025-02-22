import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});

// Dynamically import components with loading optimization
const Footer = dynamic(() => import('./components/Footer'), {
  ssr: true,
  loading: () => <footer className="bg-black py-12" />
});

const Navbar = dynamic(() => import('./components/Navbar'), {
  ssr: true,
  loading: () => <nav className="fixed top-0 w-full h-16 bg-black/80 backdrop-blur-sm z-50" />
});

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
  authors: [{ name: 'René Kuhm' }],
  creator: 'René Kuhm',
  publisher: 'René Kuhm',
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
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

// Root layout with performance optimizations
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
