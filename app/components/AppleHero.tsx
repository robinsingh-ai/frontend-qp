'use client';

import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const AppleHero = () => {
  return (
    <div 
      className="hero-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e2eafc 100%)',
      }}
    >
      {/* Decorative circles - Apple-style elements */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full bg-blue-200 opacity-30 blur-xl"></div>
      <div className="absolute bottom-[15%] left-[10%] w-40 h-40 rounded-full bg-indigo-200 opacity-40 blur-xl"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-40 text-center relative z-10">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-normal"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Quick Prompt
          </span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
        >
          Organize all your prompts with a clean, intuitive interface
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <p className="mb-2 text-sm">Scroll to explore</p>
        <FiArrowDown className="w-5 h-5" />
      </div>
    </div>
  );
};

export default AppleHero; 