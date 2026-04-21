import React from 'react';

const Marquee = () => {
  const items = [
    "Built for Scale",
    "AI-First Thinking",
    "Security Grade Alpha",
    "Global Deployment",
  ];

  return (
<div className="relative py-20 border-y border-white/[0.03] overflow-hidden whitespace-nowrap group 
                bg-transparent backdrop-blur-[2px] transition-all duration-700
                hover:bg-purple-500/[0.02]"> 
  
  {/* Removed the hover:backdrop-blur-sm class */}

  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent pointer-events-none" />
  
      // Inside Marquee.jsx
        <div className="flex w-fit animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        
        {/* Render twice for seamless looping */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center px-10">
            {items.map((text, index) => (
              <React.Fragment key={index}>
                <span className="font-['Space_Grotesk'] text-5xl font-black text-white/100 uppercase tracking-tighter transition-colors duration-500 hover:text-purple-400">
                  {text}
                </span>
                {/* Glowing Node Divider */}
                <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
