import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo.png" 
                alt="Λόγος Logo" 
                width={40} 
                height={40} 
                className="transition-transform group-hover:scale-105"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-navy dark:text-foreground">
                Λόγος
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/laboratorio" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-red transition-colors">
              El Laboratorio
            </Link>
            <Link href="/bitacora" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-red transition-colors">
              La Bitácora
            </Link>
            <Link href="/agora" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-red transition-colors">
              El Ágora
            </Link>
            <Link href="/archivo" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-red transition-colors">
              El Archivo
            </Link>
            <Link href="/voces" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-red transition-colors">
              Voces
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            {/* Mobile menu button (to be implemented) */}
            <button className="text-gray-500 hover:text-brand-red focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
