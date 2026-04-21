import React from 'react'

const Specialized = () => {
    const architectures = [
    {
      id: "01",
      title: "Web Development",
      desc: "Next-generation storefronts and enterprise platforms built with React, Next.js, and extreme performance optimization.",
      tags: ["Architecture", "Performance"]
    },
    {
      id: "02",
      title: "App Development",
      desc: "Native and cross-platform mobile experiences that dominate app stores with fluid UX and robust security.",
      tags: ["iOS / Android", "Flutter"]
    },
    {
      id: "03",
      title: "AI Systems",
      desc: "Custom LLM integrations and predictive analytics models designed to automate high-level decision making.",
      tags: ["Machine Learning", "Data Science"]
    }
  ];
  return (
    <div >
      <section className="  text-white ">
      <div className="container mx-auto px-6 py-15 lg:px-12  border-y border-white/[0.03] bg-gradient-to-tr from-black/[0.1] via-neutral-900/[0.5] to-black/[0.1] backdrop-blur-[2px]">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Specialized<br />
              <span className="text-purple-400">Architectures.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md border-l border-purple-500/50 pl-6">
              We move beyond the template, delivering bespoke digital ecosystems 
              that integrate seamlessly with your core business logic.
            </p>
          </div>
        </div>

        {/* Accordion/Panel List */}
        <div className="space-y-4">
          {architectures.map((item) => (
            <div 
              key={item.id}
              className="group bg-neutral-900/50 hover:bg-neutral-800/80 transition-all duration-500 
                         cursor-pointer p-8 lg:p-10 rounded-3xl border border-white/5 hover:border-purple-500/30"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                
                <div className="flex items-center gap-8">
                  {/* Numbering with hover effect */}
                  <span className="text-6xl font-black text-white/35 group-hover:text-purple-500/50 transition-colors duration-500">
                    {item.id}
                  </span>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 max-w-md group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="hidden md:flex gap-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-gray-500 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow/Plus Icon - using a simple SVG since Material Symbols requires a font import */}
                <div className="text-purple-500 group-hover:rotate-45 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V136H96a8,8,0,0,1,0-16h24V96a8,8,0,0,1,16,0v24h24A8,8,0,0,1,168,128Z"></path>
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Specialized
