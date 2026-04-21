const GrainOverlay = () => (
  <div className="fixed inset-0 z-[20] pointer-events-none opacity-[0.08]">
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        {/* We use a higher baseFrequency and specific seed for finer grain */}
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.60" 
          stitchTiles="stitch" 
          numOctaves="3" 
        />
        {/* This helps blend it perfectly into a dark UI */}
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export default GrainOverlay;