import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName, index) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: index + 1,
        slug,
        content,
        ...(data as Omit<Post, 'slug' | 'content' | 'id'>),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const posts = getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch {
    return null;
  }
}
