import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";

export default function BitacoraPage() {
  const posts = getAllPosts("bitacora");

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 font-mono">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
            &gt; La Bitácora
          </h1>
          <p className="text-gray-500">
            Meditaciones, notas breves y pensamientos en bruto.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-8 border-l-2 border-brand-red shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/bitacora/${post.slug}`}>
                <h2 className="text-2xl font-bold text-brand-blue mb-2 hover:text-brand-red transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-sm text-brand-red font-semibold mb-4 block">
                {formatDate(post.date).toUpperCase()} 
                {post.author && ` // ${post.author}`}
              </time>
              <p className="leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link href={`/bitacora/${post.slug}`} className="text-sm font-bold text-gray-500 hover:text-brand-red transition-colors">
                [Leer nota completa]
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="text-center text-gray-400 italic">No hay registros en la bitácora.</p>
          )}
        </div>

      </div>
    </div>
  );
}
