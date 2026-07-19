import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white">Λόγος</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Un laboratorio de ideas donde exploramos el pensamiento complejo de forma clara y dialogada.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-white tracking-wider text-sm uppercase">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="/laboratorio" className="text-sm hover:text-accent transition-colors">El Laboratorio</Link></li>
              <li><Link href="/bitacora" className="text-sm hover:text-accent transition-colors">La Bitácora</Link></li>
              <li><Link href="/agora" className="text-sm hover:text-accent transition-colors">El Ágora</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-white tracking-wider text-sm uppercase">Boletín Mensual</h4>
            <p className="text-sm text-gray-400">Recibe nuestras últimas reflexiones directamente en tu correo.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="tu@correo.com" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-accent text-white w-full"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-brand-green hover:bg-brand-green/90 text-white font-medium rounded-md transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Λόγος Think Tank. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            {/* X/Twitter Icon */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
