'use client';

import React from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden pb-80 py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      {/* Video background */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #030014 70%)',
          mixBlendMode: 'overlay',
        }}
      />

      <div ref={ref} className="flex flex-col items-center w-full z-[20] pt-[50px]">
        <SkillText inView={inView} />
        
        {/* Logos in Inverse Pyramid */}
        <motion.div
          className="flex flex-col items-center justify-center gap-5 relative z-[30]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Row 1: 8 logos */}
          <div className="flex flex-row justify-center gap-5 items-center">
            {Frontend_skill.slice(0, 8).map((image, index) => (
              <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
          </div>

          {/* Row 2: 7 logos */}
          <div className="flex flex-row justify-center gap-5 items-center">
            {[...Frontend_skill.slice(8, 10), ...Backend_skill.slice(0, 5)].map((image, index) => (
              <SkillDataProvider key={index + 8} src={image.Image} width={image.width} height={image.height} index={index + 8} />
            ))}
          </div>

          {/* Row 3: 6 logos */}
          <div className="flex flex-row justify-center gap-5 items-center">
            {Backend_skill.slice(5, Backend_skill.length).map((image, index) => (
              <SkillDataProvider key={index + 15} src={image.Image} width={image.width} height={image.height} index={index + 15} />
            ))}
          </div>

          {/* Row 4: 4 logos */}
          <div className="flex flex-row justify-center gap-5 items-center">
            {Full_stack.map((image, index) => (
              <SkillDataProvider key={index + 21} src={image.Image} width={image.width} height={image.height} index={index + 21} />
            ))}
          </div>

          {/* Row 5: 3 logos */}
          <div className="flex flex-row justify-center gap-5 items-center">
            {Other_skill.slice(0, 3).map((image, index) => (
              <SkillDataProvider key={index + 25} src={image.Image} width={image.width} height={image.height} index={index + 25} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
