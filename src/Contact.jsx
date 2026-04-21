import React from 'react';

const Contact = () => {
  return (
    <section className="py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* Left Side: Text & Contact Info */}
        <div className="relative z-10">
          <h2 className="font-['Space_Grotesk'] text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white leading-tight">
            Ready to <br /><span className="text-purple-400">Evolve?</span>
          </h2>
          <p className="text-gray-400 font-medium text-xl mb-12 max-w-md border-l border-purple-400/30 pl-6 leading-relaxed">
            Our intake process is rigorous, ensuring we only partner on projects where we can deliver transformative value.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-400/10 group-hover:border-purple-400/50 transition-all duration-500">
                <svg className="w-5 h-5 fill-purple-400" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Email Us</div>
                <div className="text-lg font-['Space_Grotesk'] font-bold text-white">hq@devkrafto.solutions</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-400/10 group-hover:border-purple-400/50 transition-all duration-500">
                <svg className="w-5 h-5 fill-purple-400" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Base Operations</div>
                <div className="text-lg font-['Space_Grotesk'] font-bold text-white">Tech District, Level 42</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Glass Form */}
        <div className="relative group">
          {/* Subtle glow behind the form */}
          <div className="absolute -inset-4 bg-purple-400/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000" />
          
          <div className="relative bg-white/[0.02] backdrop-blur-xl p-10 lg:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Full Name */}
                <div className="relative z-0 w-full group">
                  <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-purple-400 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-xs text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold">Full Name</label>
                </div>
                {/* Email */}
                <div className="relative z-0 w-full group">
                  <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-purple-400 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-xs text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold">Email Address</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Project Select */}
                <div className="relative z-0 w-full group">
                  <select className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-purple-400 peer" required>
                    <option value="" className="bg-black">Project Type</option>
                    <option value="web" className="bg-black">Web Development</option>
                    <option value="app" className="bg-black">Mobile App</option>
                    <option value="ai" className="bg-black">AI Integration</option>
                  </select>
                </div>
                {/* Budget Select */}
                <div className="relative z-0 w-full group">
                  <select className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-purple-400 peer" required>
                    <option value="" className="bg-black">Budget Tier</option>
                    <option value="25k" className="bg-black">$25k - $50k</option>
                    <option value="50k" className="bg-black">$50k - $150k</option>
                    <option value="max" className="bg-black">$150k+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative z-0 w-full group">
                <textarea rows="4" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-purple-400 peer resize-none" placeholder=" " required></textarea>
                <label className="peer-focus:font-medium absolute text-xs text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold">The Challenge</label>
              </div>

              <button className="w-full bg-purple-400 text-black font-['Space_Grotesk'] font-black uppercase tracking-[0.2em] py-6 rounded-xl hover:bg-purple-400 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Initiate Protocol
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
