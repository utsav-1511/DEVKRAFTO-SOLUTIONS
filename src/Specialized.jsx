import React, { useState } from 'react';

const Specialized = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const architectures = [
    {
      id: "01",
      title: "Web Development",
      desc: "Next-generation storefronts and enterprise platforms built with React, Next.js, and extreme performance optimization.",
      tags: ["Architecture", "Performance"],
      tech: ["React", "Next.js", "Tailwind"]
    },
    {
      id: "02",
      title: "App Development",
      desc: "Native and cross-platform mobile experiences that dominate app stores with fluid UX and robust security.",
      tags: ["iOS / Android", "Flutter"],
      tech: ["Flutter", "Firebase", "Dart"]
    },
    {
      id: "03",
      title: "AI Systems",
      desc: "Custom LLM integrations and predictive analytics models designed to automate high-level decision making.",
      tags: ["Machine Learning", "Data Science"],
      tech: ["Python", "OpenAI", "PyTorch"]
    }
  ];

  // Bento Cards for the empty space
  const techCards = [
    { name: "React", parent: "01" },
    { name: "Mongo DB", parent: "01" },
    { name: "Flutter", parent: "02" },
    { name: "Python", parent: "03" },
    { name: "OpenAI", parent: "03" },
    { name: "Node.js", parent: "01" }
  ];

  return (
    <div>
      <section className="text-white">
        <div className="container mx-auto px-6 py-15 lg:px-12 border-y border-white/[0.03] bg-gradient-to-tr from-black/[0.1] via-neutral-900/[0.5] to-black/[0.1] backdrop-blur-[2px]">
          
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Specialized<br />
                <span className="text-purple-400">Architectures.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md border-l border-purple-500/50 pl-6">
                We move beyond the template, delivering bespoke digital ecosystems 
                that integrate seamlessly with your core business logic.
              </p>
            </div>

            {/* CREATIVE SPACE: Live Tech-Stack Bento Cards */}
            <div className="lg:col-span-6 hidden lg:grid grid-cols-3 gap-4 relative items-center">
              {techCards.map((tech, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border transition-all duration-500 flex items-center justify-center backdrop-blur-md
                    ${hoveredId === tech.parent 
                      ? 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-105' 
                      : 'bg-white/[0.02] border-white/5 opacity-40'}`}
                >
                  <span className={`font-mono text-sm tracking-widest uppercase transition-colors
                    ${hoveredId === tech.parent ? 'text-purple-300' : 'text-gray-500'}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Background Glow */}
              <div className="absolute inset-0 bg-purple-500/5 blur-[100px] -z-10 rounded-full"></div>
            </div>
          </div>

          {/* Architecture Cards Grid (Updated to 3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            {architectures.map((item) => (
              <div 
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group bg-neutral-900/50 hover:bg-neutral-800/80 transition-all duration-500 
                           cursor-pointer p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 flex flex-col justify-between min-h-[350px]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    {/* Numbering */}
                    <span className="text-5xl font-black text-white/45 group-hover:text-white transition-colors duration-500">
                      {item.id}
                    </span>
                    {/* Arrow/Plus Icon */}
                    <div className="text-purple-500 group-hover:rotate-45 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V136H96a8,8,0,0,1,0-16h24V96a8,8,0,0,1,16,0v24h24A8,8,0,0,1,168,128Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Tags Section at the bottom */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-gray-500 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Specialized;