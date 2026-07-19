import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ShareButtons from "@/components/social/ShareButtons";
import GiscusComments from "@/components/social/GiscusComments";

export async function generateStaticParams() {
  const posts = getAllPosts("bitacora");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug, "bitacora");
    return {
      title: post.meta.title,
      description: post.meta.excerpt || "Nota en La Bitácora de Λόγος",
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
    return { title: "Nota no encontrada" };
  }
}

export default async function BitacoraPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = getPostBySlug(slug, "bitacora");
  } catch (e) {
    notFound();
  }

  if (!post) return null;

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 font-mono">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/bitacora" className="text-gray-500 hover:text-brand-red font-bold mb-8 inline-block transition-colors">
          &lt; Volver a la bitácora
        </Link>
        
        <article className="bg-white p-8 border-l-2 border-brand-red shadow-sm">
          <header className="mb-8 border-b border-gray-100 pb-8">
            <h1 className="text-3xl font-bold mb-4 text-brand-blue">
              {post.meta.title}
            </h1>
            <time className="text-sm text-brand-red font-semibold block">
              {formatDate(post.meta.date).toUpperCase()}
              {post.meta.author && ` // ${post.meta.author}`}
            </time>
          </header>

          <div className="prose prose-blue max-w-none font-mono prose-headings:font-mono prose-a:text-brand-red prose-p:leading-relaxed">
            <MDXRemote source={post.content} />
          </div>

          <ShareButtons key={`share-${post.slug}`} title={post.meta.title} />
          <GiscusComments key={`giscus-${post.slug}`} />
        </article>

      </div>
    </div>
  );
}
