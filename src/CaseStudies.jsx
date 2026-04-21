import React, { useRef } from 'react'; // Added useRef

const CaseStudies = () => {
  const scrollRef = useRef(null); // Create a reference for the scroll container

  // Function to handle scroll logic
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Nova Vault",
      category: "Fintech Evolution",
      desc: "A quantum-secured wealth management platform with real-time asset synchronization.",
      img: "https://images.pexels.com/photos/35638979/pexels-photo-35638979.jpeg"
    },
    {
      title: "Aether Core",
      category: "AI Integration",
      desc: "Predictive logistics engine managing supply chains for Fortune 500 tech retailers.",
      img: "https://images.pexels.com/photos/34804017/pexels-photo-34804017.jpeg"
    },
    {
      title: "Zenith Cloud",
      category: "SaaS Platform",
      desc: "Cloud-native infrastructure monitoring with 3D spatial reporting and anomaly detection.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
    },
    {
      title: "Vertex Mesh",
      category: "Decentralized Systems",
      desc: "Hyper-local mesh network protocol for offline peer-to-peer communication in high-density zones.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
    },
    {
      title: "Titan Bio-OS",
      category: "Health-Tech SaaS",
      desc: "Real-time biometric monitoring and pharmaceutical supply chain tracking with multi-tenant API security.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "Spectral Engine",
      category: "Spatial AI",
      desc: "Deep-learning computer vision system for autonomous industrial drone navigation and hazard mapping.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-15 bg-transparent relative overflow-hidden border-y border-white/[0.03] bg-gradient-to-tr from-black/[0.1] via-neutral-900/[0.5] to-black/[0.1] backdrop-blur-[2px]">
      
      <div className="container mx-auto px-6 lg:px-12 mb-16 flex justify-between items-end ">
        <div>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tighter text-white">
            Case <span className="text-purple-400">Studies.</span>
          </h2>
        </div>
        
        <div className="flex gap-4">
          {/* Left Arrow Button */}
          <button 
            onClick={() => scroll('left')} 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 active:scale-90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          {/* Right Arrow Button */}
          <button 
            onClick={() => scroll('right')} 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 active:scale-90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Added ref={scrollRef} below */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden px-6 lg:px-12 pb-12 snap-x 
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="min-w-[300px] md:min-w-[450px] aspect-[16/10] relative group rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-700 snap-center"
          >
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              src={project.img} 
              alt={project.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-['Space_Grotesk'] text-purple-400 text-[12px] tracking-[0.3em] uppercase mb-3 block font-bold">
                  {project.category}
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs max-w-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
                <button className="text-white font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group/btn">
                  View Case 
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;