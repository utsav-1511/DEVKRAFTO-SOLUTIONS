import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-white/5 py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-end">
        
        {/* Left Side: Brand & Copyright */}
        <div>
          <div className="text-white font-black text-4xl font-['Space_Grotesk'] tracking-tighter mb-8 uppercase group cursor-default">
            Dev<span className="text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-500">Krafto</span>
          </div>
          <div className="text-gray-600 font-['Space_Grotesk'] text-[10px] tracking-[0.3em] uppercase">
            © 2026 DEVKRAFTO. BEYOND THE GRID.
          </div>
        </div>

        {/* Right Side: Links & Manifesto */}
        <div className="mt-12 md:mt-0 flex flex-col md:items-end gap-6">
          <div className="flex flex-wrap gap-8">
            {['Privacy', 'Terms', 'Github', 'LinkedIn'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-gray-500 hover:text-purple-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-gray-600 text-[9px] font-['Space_Grotesk'] uppercase tracking-[0.2em] max-w-sm md:text-right leading-relaxed">
            Synthesized for performance. Engineered for dominance. 
            <br />
            DevKrafto remains the architect of high-utility digital systems.
          </div>
        </div>

      </div>
      
      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
    </footer>
  );
};

export default Footer;
