export default function AgoraPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
            El Ágora
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            Diálogos, charlas y debates audiovisuales.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Video Card 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* YouTube iFrame Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-mono text-sm">
                [iFrame de YouTube - 16:9]
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2 block">Mesa Redonda</span>
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-2">El futuro de la inteligencia artificial</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Un panel de expertos discute las implicaciones éticas y filosóficas de la IA general y su impacto en la sociedad moderna.
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-500">Duración: 45:20</span>
                <button className="text-brand-blue hover:text-brand-green font-semibold transition-colors">
                  Ver detalles &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Vimeo iFrame Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-mono text-sm">
                [iFrame de Vimeo - 16:9]
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2 block">Entrevista</span>
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-2">La ética estoica hoy</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Conversación profunda sobre cómo aplicar los principios del estoicismo clásico en un mundo hiperconectado y ansioso.
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-500">Duración: 28:15</span>
                <button className="text-brand-blue hover:text-brand-red font-semibold transition-colors">
                  Ver detalles &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
