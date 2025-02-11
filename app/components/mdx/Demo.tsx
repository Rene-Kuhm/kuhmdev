'use client';

import { FaPlay } from 'react-icons/fa';

interface DemoProps {
  children: React.ReactNode;
  title?: string;
}

export default function Demo({ children, title }: DemoProps) {
  return (
    <section className="my-6">
      {title && (
        <header className="flex items-center gap-2 mb-2 text-[#00FF7F]">
          <FaPlay size={12} />
          <h2 className="font-medium">{title}</h2>
        </header>
      )}
      <div className="p-6 bg-[#1E1E1E] rounded-lg border border-gray-800">
        {children}
      </div>
    </section>
  );
}
