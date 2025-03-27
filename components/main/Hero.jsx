import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col h-full w-full">
        {/* Background color base */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#030014] z-[1]" />
        
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[2]"
          style={{
            opacity: 0.8,
            transform: 'rotate(180deg)',
            filter: 'blur(0.5px) brightness(1) contrast(1.1)',
            mixBlendMode: 'lighten',
          }}
        >
          <source src="/BlackHole1.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-[3]"
          style={{
            background: 'linear-gradient(transparent 0%, #030014 95%)',
            opacity: 0.6,
          }}
        />

        {/* Content */}
        <div className="relative z-[4]">
          <HeroContent />
        </div>
      </div>
    </>
  )
}

export default Hero
