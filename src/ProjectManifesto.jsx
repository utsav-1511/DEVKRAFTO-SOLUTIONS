import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';




const ProjectManifesto = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // Ultra-transparent overlay
        className="fixed inset-0 z-[999] bg-black/20 backdrop-blur-md flex items-center justify-center p-6 font-['Space_Grotesk']"
      >
        <motion.div 
          initial={{ y: 30, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.98 }}
          // Apple Glass Style: bg-white/[0.03] + High Blur + Thin Border
          // motion.div (Modal Card) ki classes mein ye add karo:
            className="relative w-full max-w-4xl h-[80vh] bg-white/[0.008] border border-white/20 rounded-[2.5rem] 
           overflow-y-auto overflow-x-hidden shadow-2xl backdrop-blur-3xl
           [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Header */}
          <div className="relative top-0 w-full p-8 flex justify-between items-center z-50 bg-gradient-to-b from-black/40 via-black/20 to-transparent">
            <div className="font-mono text-[16px] tracking-[0.4em] text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
              DEVKRAFTO _ {project.category}
            </div>
            <button 
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition-all duration-300 font-mono text-[14px] font-bold tracking-widest uppercase flex items-center gap-2 group backdrop-blur-md shadow-lg text-white"
            >
                <span className="text-purple-400 group-hover:text-black mr-1">✕</span>
                <span>Close</span>
                <span className="text-[8px] opacity-40 group-hover:text-black/40 ml-2">[ESC]</span>
            </button>
          </div>

          <div className="px-10 pb-16">
            {/* Compact Title */}
            <div className="mb-10">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9] flex gap-3">
                {project.title.split(' ')[0]}<br/>
                <span className="text-white italic">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            {/* Main Visual & Link */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              <div className="lg:col-span-7 aspect-video rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
                  alt={project.title}
                />
              </div>
              
              <div className="lg:col-span-5 flex flex-col gap-4">
                <a 
                  href={project.github || "#"} 
                  target="_blank"
                  className="w-full py-5 rounded-2xl bg-white text-black flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Live Repository
                </a>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ">
                  <h4 className="font-mono  text-white text-[16px] uppercase mb-3 tracking-widest">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(project.stack ||["React", "Vite", "Framer"]).map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[15px] font-mono text-white tracking-tighter">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brief Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="space-y-4">
                <h3 className="text-purple-400 font-mono text-[20px] uppercase font-bold tracking-widest leading-none">01. The Friction</h3>
                <p className="text-xl lg:text-2xl text-gray-400 leading-tight">
                  {project.problem || "Inefficient systems were causing bottlenecks."}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-purple-400 font-mono text-[20px] uppercase font-bold tracking-widest leading-none">02. The Logic</h3>
                <p className="text-xl lg:text-2xl text-white leading-tight">
                  {project.desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectManifesto;