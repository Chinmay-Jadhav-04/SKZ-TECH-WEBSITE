'use client';
import React from 'react';
import { motion } from 'framer-motion';import { SparklesIcon } from '@heroicons/react/20/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
interface SkillTextProps {  inView: boolean;
}
const SkillText = ({ inView }: SkillTextProps) => {  return (
    <>      <motion.div
        variants={slideInFromTop}        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[40px] flex flex-row items-center justify-center"
      >        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Skills & Technologies</h1>      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}        className="text-4xl font-bold text-center mb-10"
      >        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Technologies We Specialize In        </span>
      </motion.div>
      <motion.div        variants={slideInFromRight(0.5)}
        initial="hidden"        animate={inView ? 'visible' : 'hidden'}
        className="text-[25px] text-gray-200 mb-10 mt-[10px] text-center"      >
        We are a team of developers dedicated to creating exceptional digital experiences.         Our expertise spans across modern web technologies and innovative solutions.
      </motion.div>    </>
  );};

export default SkillText;

























