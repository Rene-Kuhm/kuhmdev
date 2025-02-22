'use client';

import dynamic from 'next/dynamic';

// Lazy load components with loading fallback and more efficient chunking
const ClientStats = dynamic(() => import('./ClientStats'), {
  ssr: false,
  loading: () => <div className="h-20" /> // Minimal height placeholder
});

const Services = dynamic(() => import('./Services'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const Projects = dynamic(() => import('./Projects'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

export default function ClientWrapper() {
  return (
    <>
      <ClientStats />
      <Services />
      <Projects />
    </>
  );
}