import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductShowcase from './components/ProductShowcase';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
} 