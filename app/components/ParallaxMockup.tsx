'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ParallaxMockup = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mockupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLHeadingElement>(null);
  
  // Mockup image data
  const mockups = [
    {
      image: '/mockups/Command_pallete.png',  // Remove `./`
      svg: '/mockups/Command_pallete.svg',
      title: 'Command Palette',
      description: 'Access your prompts instantly'
    },
    {
      image: '/mockups/prompt_manager.png',
      svg: '/mockups/prompt_manager.svg',
      title: 'Prompt Manager',
      description: 'Organize all your prompts'
    },
    {
      image: '/mockups/popup.png',
      svg: '/mockups/popup.svg',
      title: 'Quick Access',
      description: 'Use prompts anywhere'
    }
  ];
  
  
  useEffect(() => {
    // Initial fade-in for section header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        }
      }
    );
    
    // Create scroll-based sequence for each mockup
    mockupRefs.current.forEach((mockup, index) => {
      if (!mockup) return;
      
      const textElement = textRefs.current[index];
      const imageElement = imageRefs.current[index];
      
      if (!textElement || !imageElement) return;
      
      // Pin the section for a longer scrolling experience
      ScrollTrigger.create({
        trigger: mockup,
        start: 'top top',
        end: '+=200%', // Double the scroll distance for more control
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
      
      // Create scroll timeline for sequence with clear separation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mockup,
          start: 'top top',
          end: '+=200%', // Match the pin distance
          scrub: 1,
        }
      });
      
      // Improved sequence:
      // 1. Text stays fully visible for first half of scroll
      // 2. Text fades out completely
      // 3. Only after text is gone, image fades in
      timeline
        // Initial state - text visible, image hidden
        .set(textElement, { opacity: 1, y: 0 })
        .set(imageElement, { opacity: 0 })
        
        // Hold text visible for 40% of scroll
        .to(textElement, { 
          opacity: 1, 
          y: 0, 
          duration: 0.4,
          ease: "none"
        })
        
        // Text fades out completely in next 20% of scroll
        .to(textElement, { 
          opacity: 0, 
          y: -50, 
          duration: 0.2,
          ease: "power2.inOut"
        })
        
        // Small pause before image appears (10% of scroll)
        .to({}, { duration: 0.1 })
        
        // After text is gone, image fades in for remaining 30% of scroll
        .to(imageElement, { 
          opacity: 1, 
          duration: 0.3,
          ease: "power2.inOut" 
        });
    });
    
    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="mockup-showcase" ref={sectionRef}>
      <div className="container mx-auto px-4 py-16 md:py-24">
      
        
        {mockups.map((mockup, index) => (
          <div 
            key={index}
            className="mockup-section h-screen relative"
            ref={el => { mockupRefs.current[index] = el; }}
          >
            {/* Text element shown before image */}
            <div 
              className="mockup-text flex items-center justify-center h-full w-full absolute inset-0 z-10"
              ref={el => { textRefs.current[index] = el; }}
            >
              <div className="text-content text-center">
                <h3 className="text-6xl md:text-8xl font-bold mb-6 text-indigo-600 tracking-normal">
                  {mockup.title}
                </h3>
                <p className="text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto">
                  {mockup.description}
                </p>
              </div>
            </div>
            
            {/* Image that shows after text disappears */}
            <div 
              className="mockup-image absolute inset-0 flex items-center justify-center h-full w-full opacity-0"
              ref={el => { imageRefs.current[index] = el; }}
            >
              <div className="w-full h-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image 
                      src={mockup.image}
                      fill
                      alt={mockup.title}
                      className="object-contain"
                      priority={index === 0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxMockup; 