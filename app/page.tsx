import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        
        <div className="mb-8 relative w-48 h-48 md:w-64 md:h-64">
          <Image 
            src="/logo.png" 
            alt="Λόγος Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-blue mb-6 tracking-tight">
          Λόγος Think Tank
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-serif leading-relaxed mb-12">
          Un espacio dedicado a la meditación, el análisis riguroso y el pensamiento profundo. 
          Exploramos las ideas que moldean nuestro mundo.
        </p>
        <Link 
          href="/laboratorio"
          className="bg-brand-blue text-white px-8 py-4 rounded-md font-sans font-semibold hover:bg-brand-red transition-all duration-300 shadow-md hover:shadow-lg text-lg"
        >
          Entrar al Laboratorio
        </Link>
      </section>

      {/* Grid de Secciones */}
      <section className="w-full bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Link href="/laboratorio" className="bg-white p-8 border border-gray-200 hover:border-brand-blue hover:shadow-xl transition-all duration-300 rounded-lg group">
            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-3 group-hover:text-brand-red transition-colors">El Laboratorio</h3>
            <p className="text-gray-600 font-serif">Análisis formales, ensayos y piezas estructuradas de investigación.</p>
          </Link>

          <Link href="/bitacora" className="bg-white p-8 border border-gray-200 hover:border-brand-red hover:shadow-xl transition-all duration-300 rounded-lg group">
            <h3 className="text-2xl font-mono font-bold text-brand-red mb-3 group-hover:text-brand-blue transition-colors">&gt; La Bitácora</h3>
            <p className="text-gray-600 font-mono text-sm">Meditaciones, notas breves y pensamientos en bruto del día a día.</p>
          </Link>

          <Link href="/agora" className="bg-white p-8 border border-gray-200 hover:border-brand-green hover:shadow-xl transition-all duration-300 rounded-lg group">
            <h3 className="text-2xl font-sans font-bold text-brand-green mb-3 group-hover:text-brand-blue transition-colors">El Ágora</h3>
            <p className="text-gray-600 font-sans">Diálogos, debates y charlas en formato de video.</p>
          </Link>

          <Link href="/archivo" className="bg-white p-8 border border-gray-200 hover:border-brand-blue hover:shadow-xl transition-all duration-300 rounded-lg group">
            <h3 className="text-2xl font-sans font-bold text-brand-blue mb-3 group-hover:text-brand-red transition-colors">El Archivo</h3>
            <p className="text-gray-600 font-sans">Biblioteca de documentos, PDFs y recursos descargables.</p>
          </Link>

          <Link href="/voces" className="bg-white p-8 border border-gray-200 hover:border-brand-red hover:shadow-xl transition-all duration-300 rounded-lg group">
            <h3 className="text-2xl font-sans font-bold text-brand-red mb-3 group-hover:text-brand-green transition-colors">Nuestra Red</h3>
            <p className="text-gray-600 font-sans">Directorio de los pensadores y voces que conforman el Think Tank.</p>
          </Link>

        </div>
      </section>

    </div>
  );
}
