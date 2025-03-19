import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Chrome Extension
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master AI Prompts with
              <span className="text-gradient"> QuickPrompt</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              The ultimate Chrome extension for creating, organizing, and reusing your AI prompts. 
              Save time and get consistent results across all AI platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg className="w-5 h-5 mr-2 inline-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.003h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.366zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
                </svg>
                Add to Chrome
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                See How It Works
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">4.9/5</span> from <span className="font-semibold text-primary">1,000+</span> users
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 flex items-center px-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center bg-white rounded-md px-3 py-1 text-xs text-gray-600 w-2/3">
                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    chat.openai.com
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 left-0 right-0 bottom-0 flex">
                {/* Left sidebar - simulating QuickPrompt extension panel */}
                <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold mr-2">QP</div>
                        <h3 className="font-medium">QuickPrompt</h3>
                      </div>
                    </div>
                    <div className="relative">
                      <input type="text" className="w-full bg-white border border-gray-300 rounded-md py-1.5 px-3 text-sm placeholder-gray-400 focus:outline-none" placeholder="Search prompts..." />
                      <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2">
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2 px-2">FAVORITES</h4>
                      <div className="bg-primary/10 rounded-md p-2 border-l-2 border-primary">
                        <h5 className="font-medium text-sm text-gray-800">Content Writer</h5>
                        <p className="text-xs text-gray-500 truncate">Write engaging content for...</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2 px-2">CATEGORIES</h4>
                      <div className="space-y-1">
                        <div className="px-2 py-1 text-sm hover:bg-gray-100 rounded cursor-pointer">Writing</div>
                        <div className="px-2 py-1 text-sm hover:bg-gray-100 rounded cursor-pointer">Coding</div>
                        <div className="px-2 py-1 text-sm hover:bg-gray-100 rounded cursor-pointer">Marketing</div>
                        <div className="px-2 py-1 text-sm hover:bg-gray-100 rounded cursor-pointer">Analytics</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-200">
                    <button className="w-full bg-primary text-white rounded-md py-2 text-sm font-medium">
                      New Prompt
                    </button>
                  </div>
                </div>
                
                {/* Right side - simulating ChatGPT */}
                <div className="flex-1 bg-white flex flex-col">
                  <div className="flex-1 p-4 overflow-y-auto">
                    <div className="max-w-2xl mx-auto">
                      <div className="mb-6">
                        <div className="font-medium mb-2">ChatGPT</div>
                        <div className="p-3 bg-gray-100 rounded-lg text-sm">
                          I'm ChatGPT, a large language model trained by OpenAI. How can I help you today?
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="font-medium mb-2">You</div>
                        <div className="p-3 bg-primary/10 rounded-lg text-sm border border-primary/20">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-primary">Content Writer</span>
                            <span className="text-xs text-gray-500">Using QuickPrompt</span>
                          </div>
                          Write an engaging blog introduction about the benefits of using AI tools for productivity.
                        </div>
                      </div>
                      <div>
                        <div className="font-medium mb-2">ChatGPT</div>
                        <div className="p-3 bg-gray-100 rounded-lg text-sm">
                          <p className="mb-2">
                            <strong>Supercharge Your Workflow: How AI Tools Are Redefining Productivity</strong>
                          </p>
                          <p>
                            In today's fast-paced digital landscape, the difference between thriving and merely surviving often comes down to one crucial factor: productivity. Enter AI tools – the game-changing technology that's transforming how we work, create, and accomplish our daily tasks...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 p-4">
                    <div className="max-w-2xl mx-auto relative">
                      <textarea className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-sm" rows={2} placeholder="Message ChatGPT..."></textarea>
                      <button className="absolute right-3 bottom-3 text-primary">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-lg rotate-12 opacity-30 md:opacity-50 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-20 md:opacity-30 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 