import type { Metadata } from 'next';
import Script from 'next/script';
import { Hero } from './components';
import ClientWrapper from './components/ClientWrapper';

export const metadata: Metadata = {
  title: 'kuhm.dev - Desarrollo Web Profesional',
  description: 'Transformando ideas en soluciones digitales innovadoras',
  alternates: {
    canonical: '/'
  }
};

export const dynamic = 'force-static';
export const revalidate = false;
export const fetchCache = 'force-cache';
export const preferredRegion = 'auto';

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
        strategy="afterInteractive"
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
        <ClientWrapper />
      </main>
    </>
  );
}
