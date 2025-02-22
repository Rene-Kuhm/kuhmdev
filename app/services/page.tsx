import type { Metadata } from 'next';
import ServicesContent from '../components/Services';

export const metadata: Metadata = {
  title: 'Services - Kuhm Development',
  description: 'Our professional web development and software services',
};

export const dynamic = 'force-static';

export default function ServicesPage() {
  return <ServicesContent />;
}
