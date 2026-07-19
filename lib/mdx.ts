import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  readingTime?: string;
}

export function formatDate(dateString: string) {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${day} de ${months[parseInt(month, 10) - 1]} de ${year}`;
}

export function getPostBySlug(slug: string, folder: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, folder, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { 
    slug: realSlug, 
    meta: data as Omit<PostMetadata, "slug">, 
    content 
  };
}

export function getAllPosts(folder: string): PostMetadata[] {
  const folderPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const files = fs.readdirSync(folderPath);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(folderPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        readingTime: data.readingTime,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}
