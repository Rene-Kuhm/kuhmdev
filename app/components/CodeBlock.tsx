'use client';

import { motion } from 'framer-motion';
import { FaCopy } from 'react-icons/fa';
import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
}

export default function CodeBlock({ children, className, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract language from className (e.g., "language-javascript" -> "JavaScript")
  const displayLanguage = language || 
    className?.replace('language-', '')?.split(' ')[0]?.replace(/^\w/, c => c.toUpperCase()) ||
    'Code';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative my-8 rounded-lg overflow-hidden bg-[#1E1E1E]"
    >
      <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
        <span className="text-[#00FF7F] text-sm font-mono">
          {displayLanguage}
        </span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-[#00FF7F] transition-colors"
          title="Copy code"
        >
          <FaCopy size={18} />
          {copied && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-12 text-[#00FF7F] text-sm"
            >
              ¡Copiado!
            </motion.span>
          )}
        </button>
      </header>

      <div className="p-4 overflow-x-auto">
        <pre className="m-0">
          <code className={className}>
            {children}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
