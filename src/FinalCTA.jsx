import React from 'react';


const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const FinalCTA = () => {
  return (
    <section className="py-40 bg-transparent relative overflow-hidden">
      {/* The Soul: Enhanced Purple Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="font-['Space_Grotesk'] text-6xl md:text-8xl font-black mb-16 tracking-tighter leading-[0.9] text-white">
          Let’s Build Something<br />
          <span className="text-purple-400 italic">That Matters.</span>
        </h2>

        {/* The Action: High-Contrast Button */}
        <div className="relative inline-block group">
          {/* External glow that appears on hover */}
          <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          
          <button onClick={handleScrollToContact} className="relative bg-white text-black font-['Space_Grotesk'] font-black uppercase tracking-[0.2em] px-16 py-8 rounded-full text-xl hover:scale-105 active:scale-95 transition-all duration-500">
            Initiate Protocol
          </button>
        </div>
        
        {/* Subtle sub-text */}
        <p className="mt-12 text-gray-500 font-['Space_Grotesk'] text-xs uppercase tracking-[0.5em]">
          Available for Global Deployment — Q2 2026
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
