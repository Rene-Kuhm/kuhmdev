import type { Metadata } from 'next';
import PortfolioContent from '../components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio - Kuhm Development',
  description: 'Explore our latest web development and software projects',
};

export const dynamic = 'force-static';

export default function PortfolioPage() {
  return <PortfolioContent />;
}
