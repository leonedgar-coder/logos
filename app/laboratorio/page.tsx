import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";

export default function LaboratorioPage() {
  const posts = getAllPosts("laboratorio");

  return (
    <div className="bg-white text-brand-blue min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
            El Laboratorio
          </h1>
          <p className="text-xl text-gray-600 font-serif">
            Análisis formales, ensayos y piezas estructuradas.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/laboratorio/${post.slug}`}>
                <h2 className="font-serif text-3xl font-bold mb-3 hover:text-brand-red transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="flex items-center text-sm text-gray-500 mb-4 font-sans space-x-3">
                {post.readingTime && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full">⏱️ {post.readingTime}</span>
                )}
                <span>{formatDate(post.date)}</span>
                {post.author && (
                  <>
                    <span>•</span>
                    <span>{post.author}</span>
                  </>
                )}
              </div>
              <p className="font-serif text-gray-700 text-lg mb-4">
                {post.excerpt}
              </p>
              <Link href={`/laboratorio/${post.slug}`} className="text-brand-blue font-bold font-sans hover:text-brand-red transition-colors">
                Leer ensayo completo &rarr;
              </Link>
            </article>
          ))}
          
          {posts.length === 0 && (
            <p className="text-gray-500 italic font-serif">Aún no hay artículos publicados en el laboratorio.</p>
          )}
        </div>

      </div>
    </div>
  );
}
