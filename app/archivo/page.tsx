export default function ArchivoPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
            El Archivo
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            Repositorio completo de presentaciones, documentos y artículos.
          </p>
        </header>

        <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Controls (Search/Filter placeholders) */}
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <input 
              type="text" 
              placeholder="Buscar en el archivo..." 
              className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-blue text-white font-sans text-sm tracking-wider uppercase">
                  <th className="p-4 font-medium cursor-pointer hover:bg-brand-blue/90">Título</th>
                  <th className="p-4 font-medium cursor-pointer hover:bg-brand-blue/90">Autor</th>
                  <th className="p-4 font-medium cursor-pointer hover:bg-brand-blue/90 hidden sm:table-cell">Fecha</th>
                  <th className="p-4 font-medium cursor-pointer hover:bg-brand-blue/90 hidden md:table-cell">Formato</th>
                  <th className="p-4 font-medium text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-sans divide-y divide-gray-200">
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-serif font-medium text-brand-blue">La crisis del pensamiento moderno</td>
                  <td className="p-4">Dra. Elena Ramos</td>
                  <td className="p-4 hidden sm:table-cell">2026-06-15</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-md">PDF</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-brand-blue hover:text-brand-red font-medium text-sm">Descargar</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-serif font-medium text-brand-blue">El futuro de la IA (Diálogo)</td>
                  <td className="p-4">Panel Múltiple</td>
                  <td className="p-4 hidden sm:table-cell">2026-05-22</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className="px-2 py-1 text-xs font-semibold bg-blue-50 text-blue-800 rounded-md">Video</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-brand-blue hover:text-brand-red font-medium text-sm">Ver</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-serif font-medium text-brand-blue">Notas sobre la entropía</td>
                  <td className="p-4">Dr. Luis Silva</td>
                  <td className="p-4 hidden sm:table-cell">2026-04-10</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className="px-2 py-1 text-xs font-semibold bg-green-50 text-brand-green rounded-md">Artículo</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-brand-blue hover:text-brand-red font-medium text-sm">Leer</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-500 text-center">
            Mostrando 3 de 145 documentos
          </div>
        </div>

      </div>
    </div>
  );
}
