import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Elevate Your AI Interactions with
              <span className="text-gradient"> QuickPrompt</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Create, share, and optimize your AI prompts with our intuitive platform.
              Get better results from AI models with expertly crafted prompts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#" className="btn btn-primary">
                Get Started for Free
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                Learn How It Works
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-primary">5,000+</span> users already trust QuickPrompt
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-primary/10 to-blue-100/50 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-xs text-gray-500">QuickPrompt Editor</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-6 bg-primary/20 rounded w-full"></div>
                    <div className="h-6 bg-primary/20 rounded w-4/5"></div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <div className="h-8 w-24 bg-primary rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-lg rotate-12 opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 