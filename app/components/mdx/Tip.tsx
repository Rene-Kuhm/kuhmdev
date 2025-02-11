'use client';

import { FaLightbulb } from 'react-icons/fa';

interface TipProps {
  children: React.ReactNode;
}

export default function Tip({ children }: TipProps) {
  return (
    <aside className="my-6 p-4 bg-[#1E1E1E] border-l-4 border-[#00FF7F] rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-[#00FF7F] mt-1">
          <FaLightbulb size={20} />
        </span>
        <span className="flex-1 text-gray-300">
          {children}
        </span>
      </div>
    </aside>
  );
}
