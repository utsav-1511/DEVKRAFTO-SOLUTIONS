import React, { Suspense, lazy } from 'react';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    
    <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-white">
      {/* Left Content */}
      <div className="lg:col-span-7 z-10">
        <div className="font-label text-[#BA9EFF] tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-2">
          {/* Fixed Line: Changed bg-primary to bg-[#BA9EFF] */}
          <span className="w-8 h-[1px] bg-[#BA9EFF] block"></span> 
          Engineering Excellence
        </div>

        <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-8">
          We Don’t Just <br />
          
          {/* FIX 1: Added pb-2 to prevent the 'g' from cutting out */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA9EFF] via-[#d3c2ff] to-[#8a63f2] inline-block pb-2">
            <Typewriter
              options={{
                strings: ['Build Apps.', 'Design Websites.', 'Engineer AI.', 'Scale SaaS.'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: '', // No cursor
              }}
            />
          </span>

          {/* FIX 2: Moved to a div for a clean new line + added Typewriter */}
          <div className="text-white mt-2">
            <span>We Engineer </span><br />
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: ['Digital Power.', 'Scalable Systems.', 'Neural Links.', 'The Future.'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  cursor: '', // No cursor
                }}
              />
            </span>
          </div>
        </h1>

        <p className="font-body text-gray-400 text-lg max-w-lg mb-12">
          Architecting the future of enterprise technology through high-performance engineering and AI-driven solutions.
        </p>

        <div className="flex flex-wrap gap-6">
          <button className="bg-[#BA9EFF] text-black font-bold uppercase tracking-widest px-10 py-5 rounded-xl text-sm hover:opacity-90 transition-all flex items-center gap-3">
            Start a Project
            <span className="text-sm">↗</span>
          </button>
          
          <button className="group font-label text-white uppercase tracking-widest text-xs flex items-center gap-4 hover:text-[#BA9EFF] transition-colors">
            <span className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#BA9EFF] transition-colors">
              <span>▶</span>
            </span>
            The Manifesto
          </button>
        </div>
      </div>

      {/* Right Visual Element */}
      <div className="hidden lg:col-span-5  relative flex items-center justify-center min-h-[500px] md:min-h-[700px] overflow-visible">
            {/* Enhanced Glow for the larger presence */}
        <div className="absolute w-[150%] h-[150%] bg-[#BA9EFF]/10 rounded-full blur-[180px] -z-10 animate-pulse"></div>
  
             {/* 1. w-[180%] - Extreme expansion to move the 'crop boundary' far off-screen.
            2. -translate-x-32 to -translate-x-64 - Aggressive left pull toward the headlines.
            3. overflow-visible - Final safety net for transparency layers.
            */}
        <div className="absolute w-[180%] h-full flex items-center justify-center z-55 -translate-x-28 md:-translate-x-48 lg:-translate-x-96 -translate-y-10 md:-translate-y-16 lg:-translate-y-20 scale-100 md:scale-115 lg:scale-135 transition-all duration-1000 ease-in-out overflow-visible">
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
  )
}

export default HeroSection
