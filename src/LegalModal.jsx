import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LegalModal = ({ type, isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6 font-['Space_Grotesk']"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="relative w-full max-w-3xl max-h-[80vh] bg-[#111111]/90 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Header */}
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white tracking-tight uppercase">
              {type === 'Terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-sm font-mono">[ CLOSE ]</button>
          </div>

          {/* Content Area */}
          <div className="p-8 lg:p-12 overflow-y-auto no-scrollbar text-gray-400 leading-relaxed space-y-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex justify-between text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em]">
              <span>DevKrafto Solutions</span>
              <span>Effective: 2026</span>
            </div>
            
            {/* Yahan Content Render hoga (Jo tumne provide kiya hai) */}
            <div className="prose prose-invert prose-sm max-w-none">
              {content.split('\n').map((line, i) => (
                <p key={i} className={line.match(/^\d+\./) ? "text-white font-bold mt-6" : "mb-2 text-sm"}>
                  {line}
                </p>
              ))}
            </div>

            <div className="pt-10 text-[9px] font-mono text-gray-600 uppercase text-center">
              End of {type === 'Terms' ? 'Terms' : 'Policy'} // devkraftosolutions@gmail.com
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LegalModal;