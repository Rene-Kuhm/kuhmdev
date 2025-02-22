'use client';

import dynamic from 'next/dynamic';

const ClientStats = dynamic(() => import('./ClientStats'), {
  ssr: false
});
const Services = dynamic(() => import('./Services'), {
  ssr: false
});
const Projects = dynamic(() => import('./Projects'), {
  ssr: false
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