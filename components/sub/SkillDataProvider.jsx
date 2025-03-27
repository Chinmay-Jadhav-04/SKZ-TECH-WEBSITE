"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'


const SkillDataProvider = ({src, width, height, index}) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5
  }); 

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0
    }
  }

  const animateDelay = 0.3

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{
        delay: index * animateDelay,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="relative flex items-center justify-center"
      style={{
        mixBlendMode: 'lighten',
      }}
    >
      <div className="absolute w-full h-full bg-[#030014] opacity-50 rounded-full filter blur-md" />
      <Image 
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className="relative z-[1] object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </motion.div>
  )
}

export default SkillDataProvider
