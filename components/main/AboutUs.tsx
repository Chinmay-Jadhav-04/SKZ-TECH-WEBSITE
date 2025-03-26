'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/20/solid';
import { Atom, FlaskConical, Focus, Handshake } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col h-screen w-full" id="about" ref={sectionRef}>
      {/* Content Container */}
      <div className="relative z-[1] flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-20 bg-gradient-to-b from-transparent to-black/50">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
          <h1 className="Welcome-text text-[13px] flex items-center">
            <span>Who We Are</span>
          </h1>
        </motion.div>

        <div className="max-w-[800px] text-center">
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                About SKZ Tech
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-200 text-lg"
            >
              We are a passionate team of developers dedicated to creating exceptional digital experiences. Our expertise spans across modern web technologies and innovative solutions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* First Box */}
              <motion.div 
                className="feature-card group relative overflow-hidden rounded-lg p-8 
                bg-[#7042f80d] backdrop-blur-xl border border-[#7042f861]
                transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7042f81c] to-transparent group-hover:animate-shimmer"/>
                <div className="relative flex flex-col items-center text-center z-[2]">
                  <div className="w-12 h-12 rounded-full bg-[#7042f833] flex items-center justify-center mb-4 backdrop-blur-sm border border-[#7042f84d]">
                    <span className="text-2xl"><Atom color="white"/></span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                  <p className="text-gray-300">Pushing boundaries with cutting-edge technology</p>
                </div>
              </motion.div>
              
              {/* Second Box */}
              <motion.div 
                className="feature-card group relative overflow-hidden rounded-lg p-8 
                bg-[#7042f80d] backdrop-blur-xl border border-[#7042f861]
                transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7042f81c] to-transparent group-hover:animate-shimmer"/>
                <div className="relative flex flex-col items-center text-center z-[2]">
                  <div className="w-12 h-12 rounded-full bg-[#7042f833] flex items-center justify-center mb-4 backdrop-blur-sm border border-[#7042f84d]">
                    <span className="text-2xl"><FlaskConical color="pink"/></span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Creative Solutions</h3>
                  <p className="text-gray-300">Turning complex problems into elegant solutions</p>
                </div>
              </motion.div>

              {/* Third Box */}
              <motion.div 
                className="feature-card group relative overflow-hidden rounded-lg p-8 
                bg-[#7042f80d] backdrop-blur-xl border border-[#7042f861]
                transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7042f81c] to-transparent group-hover:animate-shimmer"/>
                <div className="relative flex flex-col items-center text-center z-[2]">
                  <div className="w-12 h-12 rounded-full bg-[#7042f833] flex items-center justify-center mb-4 backdrop-blur-sm border border-[#7042f84d]">
                    <span className="text-2xl"><Focus color="red"/></span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Client-Focused</h3>
                  <p className="text-gray-300">Your success is our priority</p>
                </div>
              </motion.div>

              {/* Fourth Box */}
              <motion.div 
                className="feature-card group relative overflow-hidden rounded-lg p-8 
                bg-[#7042f80d] backdrop-blur-xl border border-[#7042f861]
                transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7042f81c] to-transparent group-hover:animate-shimmer"/>
                <div className="relative flex flex-col items-center text-center z-[2]">
                  <div className="w-12 h-12 rounded-full bg-[#7042f833] flex items-center justify-center mb-4 backdrop-blur-sm border border-[#7042f84d]">
                    <span className="text-2xl"><Handshake color="#f4cc99"/></span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Collaborative Approach</h3>
                  <p className="text-gray-300">Working together to achieve excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
















