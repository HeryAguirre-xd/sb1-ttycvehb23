import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-purple-900/50 bg-gradient-to-b from-transparent to-purple-900" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Un Espectáculo En Tu Evento!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Experience the magic of live music with Arizona's premier versatile band
        </p>
        <button className="px-8 py-3 bg-[#FF5722] text-white rounded-full font-semibold 
          transform hover:scale-105 transition-all duration-300 animate-pulse">
          Book Now
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}