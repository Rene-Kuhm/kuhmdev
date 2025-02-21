import type { Metadata } from 'next';
import Script from 'next/script';
import { Hero, Projects, Services, Stats } from './components';

export const metadata: Metadata = {
  title: {
    default: 'René Kuhm | Desarrollador Web Full Stack',
    template: '%s | René Kuhm',
  },
  description:
    'Soluciones tecnológicas innovadoras. Desarrollador Web Full Stack especializado en Next.js, React, y TypeScript. Servicios de desarrollo web, consultoría y proyectos personalizados.',
  keywords: [
    'desarrollador web',
    'full stack',
    'next.js',
    'react',
    'typescript',
    'frontend',
    'backend',
    'desarrollo de software',
  ],
  openGraph: {
    title: 'René Kuhm - Desarrollador Web Full Stack',
    description:
      'Soluciones tecnológicas innovadoras. Desarrollador Web Full Stack especializado en Next.js, React, y TypeScript.',
    url: 'https://renekuhm.dev',
    type: 'website',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'René Kuhm - Desarrollador Web Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'René Kuhm | Desarrollador Web Full Stack',
    description:
      'Soluciones tecnológicas innovadoras. Desarrollador Web Full Stack especializado en Next.js, React, y TypeScript.',
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

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'René Kuhm - Desarrollador Web Full Stack',
    description:
      'Soluciones tecnológicas innovadoras. Desarrollador Web Full Stack especializado en Next.js, React, y TypeScript.',
    mainEntity: {
      '@type': 'Person',
      name: 'René Kuhm',
      jobTitle: 'Full Stack Web Developer',
      url: 'https://renekuhm.dev',
      sameAs: [
        'https://www.linkedin.com/in/renekuhm',
        'https://github.com/Rene-Kuhm',
      ],
      skills: [
        'Web Development',
        'Next.js',
        'React',
        'TypeScript',
        'Frontend Development',
        'Backend Development',
      ],
      knowsAbout: [
        'Web Technologies',
        'Software Development',
        'Cloud Computing',
        'DevOps',
      ],
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/[<>'"&]/g, (char) => {
            const entities: { [key: string]: string } = {
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&apos;',
              '&': '&amp;',
            };
            return entities[char];
          }),
        }}
      />
      <main className="bg-black">
        <Hero />
        <Stats />
        <Services />
        <Projects />
      </main>
    </>
  );
}
