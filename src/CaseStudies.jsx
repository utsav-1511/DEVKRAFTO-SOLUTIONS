import React, { useRef, useState } from 'react'; // Added useRef
import ProjectManifesto from './ProjectManifesto';

const CaseStudies = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null); // Create a reference for the scroll container

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
    title: "EcoQuest",
    category: "Gamified Ed-Tech",
    stack: ["React.js", "Vite", "Node.js", "Tailwind"],
    github:"https://github.com/Anuragkumar262/PlanetPoint-EcoQuest",
    desc: "A gamified environmental education platform developed for the Smart India Hackathon (SIH), focusing on scalable user engagement.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
  },
  {
    title: "ResQLink",
    category: "Disaster Management",
    stack: ["Android Studio", "Kotlin", "Java", "BLE"],
    desc: "A mesh-networked communication system using BLE for offline emergency messaging, engineered for HackIndia Spark 6.",
    img: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Med-SaaS Protocol",
    category: "Health-Tech SaaS",
    stack: ["Node.js", "React.js", "JavaScript"],
    
    desc: "A multi-tenant medication tracking system with caregiver workflows and a high-security PostgreSQL backend architecture.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "LM Advertising",
    category: "Agency Landing Page",
    stack: ["Node.js", "React.js", "MongoDB"],
    desc: "A premium, high-performance landing page for a Prayagraj-based agency featuring interactive UI and scroll-driven animations.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "Avian Core",
    category: "Game Engineering",
    stack: ["C#", "Unity", "Physics Engine"],
    desc: "A physics-based game built in Unity/C#, utilizing object pooling and parallax systems for optimized performance.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Neural Logic",
    category: "AI Concept",
    stack: ["Python", "AI/ML", "PyTorch"],
    desc: "An internal R&D project exploring custom LLM integrations and predictive data models for enterprise automation.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
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

            <div className="absolute inset-0  bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
              <div className="transform  translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-['Space_Grotesk']  text-gray-100 text-xl lg:text-xl tracking-[0.3em] uppercase mb-3 block  font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {project.category}
                </span>
                <h3 className="font-['Space_Grotesk'] text-3xl lg:text-4xl font-bold  text-purple-500 mb-3 leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs max-w-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 leading-relaxed line-clamp-2 font-medium">
                  {project.desc}
                </p>
                <button onClick={() => setSelectedProject(project)} className="text-white font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group/btn">
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
      <ProjectManifesto project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default CaseStudies;