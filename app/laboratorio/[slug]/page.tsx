import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ShareButtons from "@/components/social/ShareButtons";
import GiscusComments from "@/components/social/GiscusComments";

export async function generateStaticParams() {
  const posts = getAllPosts("laboratorio");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug, "laboratorio");
    return {
      title: post.meta.title,
      description: post.meta.excerpt || "Ensayo en El Laboratorio de Λόγος",
      openGraph: {
        title: post.meta.title,
        description: post.meta.excerpt,
        type: "article",
        publishedTime: post.meta.date,
        authors: post.meta.author ? [post.meta.author] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: post.meta.title,
        description: post.meta.excerpt,
      }
    };
  } catch (e) {
    return { title: "Artículo no encontrado" };
  }
}

export default async function LaboratorioPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = getPostBySlug(slug, "laboratorio");
  } catch (e) {
    notFound();
  }

  if (!post) return null;

  return (
    <div className="bg-white text-brand-blue min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/laboratorio" className="text-brand-blue hover:text-brand-red font-sans font-semibold mb-8 inline-block transition-colors">
          &larr; Volver al Laboratorio
        </Link>
        
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            {post.meta.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 font-sans space-x-3">
            {post.meta.readingTime && (
              <span className="bg-gray-100 px-3 py-1 rounded-full">⏱️ {post.meta.readingTime}</span>
            )}
            <span>{formatDate(post.meta.date)}</span>
            {post.meta.author && (
              <>
                <span>•</span>
                <span>Por {post.meta.author}</span>
              </>
            )}
          </div>
        </header>

        <article className="prose prose-lg prose-blue max-w-none font-serif prose-headings:font-serif prose-headings:text-brand-blue prose-a:text-brand-red">
          <MDXRemote source={post.content} />
        </article>

        <ShareButtons key={`share-${post.slug}`} title={post.meta.title} />
        <GiscusComments key={`giscus-${post.slug}`} />

      </div>
    </div>
  );
}
