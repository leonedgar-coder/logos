"use client";

import { useEffect, useRef } from "react";

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    // Configuración para el usuario (reemplazar con datos reales)
    script.setAttribute("data-repo", "tu-usuario/tu-repo");
    script.setAttribute("data-repo-id", "R_XXXXXXXXXX");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_XXXXXXXXX");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "es");

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h3 className="font-serif text-2xl font-bold text-brand-blue mb-2">Comunidad e Interacción</h3>
      <p className="text-gray-500 mb-8">Deja tu comentario o debate esta idea usando tu cuenta de GitHub.</p>
      <div className="w-full" ref={ref} />
    </div>
  );
}
