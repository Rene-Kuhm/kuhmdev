import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { FaCalendar, FaTag, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MDXContent from '../../components/MDXContent';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  content: string;
}

interface Props {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/posts`);
  const posts = await response.json();
  return posts.find((p: Post) => p.slug === slug);
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return (
      <>
        <Navbar />
        <main className="bg-black min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="text-[#00FF7F]">
                Post no encontrado
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  });

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
                linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              mask: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-[#00FF7F]" />
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <FaTag className="text-[#00FF7F]" />
                  {post.category}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#00FF7F]" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-8">
                {post.description}
              </p>

              {/* Featured Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <MDXContent source={mdxSource} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
