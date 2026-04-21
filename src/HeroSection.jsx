import React, { Suspense, lazy, useState,useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
  if (isManifestoOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}, [isManifestoOpen]);  

  return (
    <div className="relative"> {/* Parent relative wrapper for Modal positioning */}
      <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-white">
        {/* Left Content */}
        <div className="lg:col-span-7 z-10">
          <div className="font-label text-[#BA9EFF] tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#BA9EFF] block"></span> 
            Engineering Excellence
          </div>

          <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-8">
            We Don’t Just <br />
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA9EFF] via-[#d3c2ff] to-[#8a63f2] inline-block pb-2">
              <Typewriter
                options={{
                  strings: ['Build Apps.', 'Design Websites.', 'Engineer AI.', 'Scale SaaS.'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: '', 
                }}
              />
            </span>

            <div className="text-white mt-2">
              <span>We Engineer </span><br />
              <span className="inline-block">
                <Typewriter
                  options={{
                    strings: ['Digital Power.', 'Scalable Systems.', 'Neural Links.', 'The Future.'],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    cursor: '', 
                  }}
                />
              </span>
            </div>
          </h1>

          <p className="font-body text-gray-400 text-lg max-w-lg mb-12">
            Architecting the future of enterprise technology through high-performance engineering and AI-driven solutions.
          </p>

          <div className="flex flex-wrap gap-6">
            <button onClick={handleScrollToContact} className="bg-[#BA9EFF] text-black font-bold uppercase tracking-widest px-10 py-5 rounded-xl text-sm hover:opacity-90 transition-all flex items-center gap-3">
              Start a Project
              <span className="text-sm">↗</span>
            </button>
            
            <button onClick={() => setIsManifestoOpen(true)} className="group font-label text-white uppercase tracking-widest text-xs flex items-center gap-4 hover:text-[#BA9EFF] transition-colors">
              <span className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#BA9EFF] transition-colors">
                <span>▶</span>
              </span>
              The Manifesto
            </button>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="hidden lg:col-span-5 lg:flex relative flex items-center justify-center min-h-[500px] md:min-h-[700px] overflow-visible">
          <div className="absolute w-[150%] h-[150%] bg-[#BA9EFF]/10 rounded-full blur-[180px] -z-10 animate-pulse"></div>
    
          <div className="absolute w-[180%] h-full flex items-center justify-center z-0 -translate-x-28 md:-translate-x-48 lg:-translate-x-96 -translate-y-10 md:-translate-y-16 lg:-translate-y-20 scale-100 md:scale-115 lg:scale-135 transition-all duration-1000 ease-in-out overflow-visible">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center text-[#BA9EFF] font-['Space_Grotesk'] animate-pulse uppercase tracking-widest text-xs">
                Synchronizing Core...
              </div>
            }>
              <Spline 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'transparent'
                }}
                scene="https://prod.spline.design/ja8buIaqDkw-zBMs/scene.splinecode" 
              />
            </Suspense>
          </div>
        </div>
      </div>

      {/* --- THE MANIFESTO MODAL --- */}
      {isManifestoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/80">
          <div className="absolute inset-0" onClick={() => setIsManifestoOpen(false)}></div>
          <div className="relative w-full max-w-3xl bg-neutral-900/50 border border-white/10 p-8 md:p-16 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#BA9EFF]/20 rounded-full blur-[100px]"></div>
            <button onClick={() => setIsManifestoOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">✕</button>
            <div className="relative z-10 space-y-8">
              <div className="text-[#BA9EFF] font-bold tracking-[0.3em] uppercase text-[10px]">Protocol: DevKrafto Manifesto</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Engineering is not <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA9EFF] to-[#d3c2ff]">just a service.</span></h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p><span className="text-white font-bold">01.</span> We believe code is the new industrial steel. It must be forged with precision, not just written.</p>
                <p><span className="text-white font-bold">02.</span> We reject "black box" development. Transparency is the foundation of digital power.</p>
                <p><span className="text-white font-bold">03.</span> Performance is our religion. Every millisecond we save for your users is a victory.</p>
              </div>
              <button onClick={() => setIsManifestoOpen(false)} className="pt-8 text-[#BA9EFF] font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group/btn">End Transmission <span className="group-hover/btn:translate-x-2 transition-transform">→</span></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;