import Image from "next/image";

export default function VocesPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
            Nuestra Red
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            Las mentes detrás del laboratorio. Pensadores, académicos y profesionales.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Profile Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col text-center p-8">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Foto]
              </div>
            </div>
            <h2 className="font-serif text-2xl font-bold text-brand-blue mb-2">Dr. Luis Silva</h2>
            <p className="text-brand-green font-medium text-sm uppercase tracking-wide mb-4">Filósofo & Analista</p>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              Especialista en ética de la tecnología y filosofía contemporánea. Autor de múltiples ensayos sobre la entropía social.
            </p>
            
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-medium">Artículos</a>
            </div>
          </div>

          {/* Profile Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col text-center p-8">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Foto]
              </div>
            </div>
            <h2 className="font-serif text-2xl font-bold text-brand-blue mb-2">Dra. Elena Ramos</h2>
            <p className="text-brand-red font-medium text-sm uppercase tracking-wide mb-4">Investigadora IA</p>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              Doctora en Ciencias de la Computación con enfoque en el impacto sociológico del aprendizaje automático.
            </p>
            
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors font-medium">Artículos</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
