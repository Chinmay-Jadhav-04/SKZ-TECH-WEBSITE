import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <>
    <div className="relative flex flex-col h-auto w-full">
        <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute w-full h-full object-cover"
        >
            <source src="/BlackHole1.mp4" type="video/mp4"/>
        </video>
    <HeroContent />
    </div>
    </>
    
  )
}

export default Hero