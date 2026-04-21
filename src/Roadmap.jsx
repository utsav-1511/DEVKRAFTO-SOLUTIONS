import React from 'react';

const Roadmap = () => {
  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "Extracting project DNA through intensive technical auditing.",
      // Search Icon
      icon: <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    },
    {
      id: "02",
      title: "Strategize",
      desc: "Architecting scalable blueprints for long-term power.",
      // Tree/Strategy Icon
      icon: <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3v4zm10 10h3v-4h-3v4zm0-10h3V5h-3v4z"/>
    },
    {
      id: "03",
      title: "Build",
      desc: "Hard-coding performance with obsessive attention to detail.",
      // Terminal Icon
      icon: <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7 17l1.41-1.41L6.83 14l1.58-1.59L7 11l-3 3 3 3z"/>
    },
    {
      id: "04",
      title: "Launch",
      desc: "Deployment at the speed of thought with continuous CI/CD.",
      // Rocket Icon
      icon: <path d="M13.13 22.19l-1.63-3.83c-.34.1-.7.15-1.07.15-2.3 0-4.17-1.87-4.17-4.17 0-.37.05-.73.15-1.07l-3.84-1.63.64-1.5 3.84 1.63c.75-1.29 2.02-2.26 3.52-2.61l1.63-3.84 1.5.64-1.63 3.84c1.29.75 2.26 2.02 2.61 3.52l3.84 1.63-.64 1.5-3.84-1.63c-.35 1.5-1.32 2.77-2.61 3.52l1.63 3.84-1.5.64zM11 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tighter mb-24 text-center text-white">
          Execution <span className="text-purple-400">Roadmap.</span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2.5px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -z-10"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              {/* Glass Icon Container */}
              <div className="w-24 h-24 rounded-2xl bg-white/[0.02] backdrop-blur-md flex items-center justify-center mb-8 border border-purple-400/50 group-hover:border-white/90 group-hover:bg-purple-400/[0.05] transition-all duration-500">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-10 h-10 fill-purple-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-500"
                >
                  {step.icon}
                </svg>
              </div>

              {/* Text Content */}
              <h4 className="font-['Space_Grotesk'] text-xl font-bold mb-4 uppercase tracking-widest text-white">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
