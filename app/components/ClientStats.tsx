'use client';

import dynamic from 'next/dynamic';

const StatsComponent = dynamic(() => import('./Stats'), {
  ssr: false
});

export default function ClientStats() {
  return <StatsComponent />;
}