'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppleHero from './components/AppleHero';
import ParallaxMockup from './components/ParallaxMockup';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      
      {/* Apple-style Hero Section */}
      <AppleHero />
      
      {/* Vertical Parallax Mockup Section */}
      <ParallaxMockup />
      
      

     

      <Footer />
    </main>
  );
} 