'use client';

import { MDXRemote } from 'next-mdx-remote';
import { motion } from 'framer-motion';
import * as MDXComponents from './mdx';
import React from 'react';

interface MDXContentProps {
  source: any;
}

const isCustomComponent = (child: any) => {
  if (!child || typeof child !== 'object') return false;
  const type = child.type?.name || child.type;
  return ['Tip', 'Warning', 'Info', 'Demo', 'ImageGrid', 'pre', 'code'].includes(type);
};

const components = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="prose prose-invert prose-green max-w-4xl mx-auto
        prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
        prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-4
        prose-h3:text-2xl prose-h3:font-medium prose-h3:mb-3
        prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-[#00FF7F] prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white
        prose-ul:list-disc prose-ul:pl-6
        prose-ol:list-decimal prose-ol:pl-6
        prose-li:text-gray-300 prose-li:mb-2
        prose-blockquote:border-l-4 prose-blockquote:border-[#00FF7F] prose-blockquote:pl-4 prose-blockquote:italic
        prose-img:rounded-lg prose-img:shadow-lg"
    >
      {children}
    </motion.article>
  ),
  p: ({ children }: { children: React.ReactNode }) => {
    const childArray = React.Children.toArray(children);
    if (childArray.some(isCustomComponent)) {
      return <>{childArray}</>;
    }
    return <p className="text-gray-300 leading-relaxed">{children}</p>;
  },
  pre: ({ children }: { children: any }) => children,
  code: ({ children, className }: { children: string; className?: string }) => (
    <MDXComponents.CodeBlock className={className}>{children}</MDXComponents.CodeBlock>
  ),
  Tip: MDXComponents.Tip,
  Warning: MDXComponents.Warning,
  Info: MDXComponents.Info,
  Demo: MDXComponents.Demo,
  ImageGrid: MDXComponents.ImageGrid,
};

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
