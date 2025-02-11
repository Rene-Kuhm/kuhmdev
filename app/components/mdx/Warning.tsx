'use client';

import { FaExclamationTriangle } from 'react-icons/fa';

interface WarningProps {
  children: React.ReactNode;
}

export default function Warning({ children }: WarningProps) {
  return (
    <aside className="my-6 p-4 bg-[#1E1E1E] border-l-4 border-yellow-500 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-yellow-500 mt-1">
          <FaExclamationTriangle size={20} />
        </span>
        <span className="flex-1 text-gray-300">
          {children}
        </span>
      </div>
    </aside>
  );
}
