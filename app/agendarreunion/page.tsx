"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function AgendarReunion() {
  useEffect(() => {
    // Cargar CSS de Calendly
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cargar JS de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar al desmontar
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header con navegación */}
      <div className="p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="text-center max-w-3xl mx-auto px-6 ">
        <h1 className="font-display text-4xl md:text-5xl font-light">
          Agenda tu reunión
        </h1>
      </div>

      {/* Calendly Inline Widget - Horizontal Layout */}
      <div className="flex-1 w-full px-6 pb-12">
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          data-url="https://calendly.com/nuvemnstudio/nueva-reunion?hide_gdpr_banner=1&primary_color=adff00&background_color=1a1a1a&text_color=ffffff"
          style={{ minWidth: "320px", height: "1000px", width: "100%", maxWidth: "1200px" }}
        />
      </div>

      {/* Ocultar scrollbar globalmente para esta página */}
      <style jsx global>{`
        .calendly-inline-widget iframe {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .calendly-inline-widget iframe::-webkit-scrollbar {
          display: none;
        }
        /* Ocultar el badge flotante de Calendly */
        .calendly-badge-widget {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
