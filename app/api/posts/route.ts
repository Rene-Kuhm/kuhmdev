import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
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

export async function GET() {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map(async (fileName, index) => {
          const slug = fileName.replace(/\.mdx$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = await fs.readFile(fullPath, 'utf8');
          const { data, content } = matter(fileContents);

          return {
            id: index + 1,
            slug,
            content,
            ...(data as Omit<Post, 'slug' | 'content' | 'id'>),
          };
        })
    );

    const sortedPosts = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
    return NextResponse.json(sortedPosts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
