const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Navbar = () => {
  return (
    <nav className="absolute top-3.5 left-1/2 -translate-x-1/2 w-full max-w-[1100px] bg-white/[0.1] backdrop-blur-md flex justify-between items-center px-10 py-5 rounded-full z-50 border border-white/10 transition-colors duration-500 hover:bg-white/[0.2]">
      
      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white relative z-10">DevKrafto</h3>
      
      {/* Links 
      
      <div className='hidden md:flex items-center text-white gap-7 font-bold'>
        <h2 className="font-['Space_Grotesk'] cursor-pointer hover:text-[#BA9EFF] transition">Who We Are</h2>
        <h2 className="font-['Space_Grotesk'] cursor-pointer hover:text-[#BA9EFF] transition">What We Do</h2>
        <h2 className="font-['Space_Grotesk'] cursor-pointer hover:text-[#BA9EFF] transition">Contact Us</h2>
      </div>*/}

      <button onClick={handleScrollToContact} className="font-['Space_Grotesk'] px-6 py-2 bg-[#BA9EFF] text-black font-bold rounded-xl transition-transform active:scale-95">
        INITIATE PROTOCOL
      </button>
    </nav>
  )
}

export default Navbar
