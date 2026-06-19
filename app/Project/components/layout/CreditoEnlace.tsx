import React from 'react';

export default function CreditoEnlace() {
  return (
    <footer className="w-full bg-yaku-chocolate-dark text-yaku-cream/50 py-10 border-t border-yaku-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yaku-green to-yaku-green-leaf rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
            </div>
            <span className="font-serif font-bold text-lg text-yaku-cream tracking-tight">YAKU</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Gelatina Saludable de Yacón.</p>
          <p className="text-xs mt-1 text-yaku-cream/30">Proyecto académico de la Carrera de Nutrición. Todos los derechos reservados.</p>
        </div>

        {/* Developer Credits */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <p className="text-sm">
            Diseño y Desarrollo Web por{' '}
            <span className="text-yaku-green-light font-medium hover:text-yaku-green-leaf transition-colors">
              [Alessandro Yevara Ponce]
            </span>
          </p>
          <div className="flex gap-4 mt-3">
            <a href="https://github.com/DrAlastor" target="_blank" rel="noopener noreferrer" className="text-yaku-cream/30 hover:text-yaku-cream transition-colors text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alessandro-yevara-ponce-286876407/" target="_blank" rel="noopener noreferrer" className="text-yaku-cream/30 hover:text-yaku-cream transition-colors text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
            <a href="https://alessandro-portafolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-yaku-cream/30 hover:text-yaku-cream transition-colors text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Portafolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
