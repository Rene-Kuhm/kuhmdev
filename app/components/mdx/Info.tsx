'use client';

import { FaInfoCircle } from 'react-icons/fa';

interface InfoProps {
  children: React.ReactNode;
}

export default function Info({ children }: InfoProps) {
  return (
    <aside className="my-6 p-4 bg-[#1E1E1E] border-l-4 border-blue-500 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-blue-500 mt-1">
          <FaInfoCircle size={20} />
        </span>
        <span className="flex-1 text-gray-300">
          {children}
        </span>
      </div>
    </aside>
  );
}
