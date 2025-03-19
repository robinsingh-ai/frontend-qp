import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
            PRODUCT SHOWCASE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for <span className="text-gradient">AI Power Users</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how QuickPrompt transforms your AI workflow with a powerful Chrome extension that works seamlessly with all your favorite AI platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Works Everywhere</h3>
                  <p className="text-gray-600">QuickPrompt integrates with ChatGPT, Bard, Claude, and any other AI platform that accepts text input.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Instant Access</h3>
                  <p className="text-gray-600">Access your entire prompt library with a single click. No more copying and pasting from notes or documents.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Template Variables</h3>
                  <p className="text-gray-600">Create dynamic prompts with fillable variables like {`{context}`}, {`{tone}`}, or {`{target}`} for maximum flexibility.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200 max-w-md mx-auto">
              {/* Extension Header */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold">QP</div>
                  <div>
                    <h3 className="font-bold text-xl">QuickPrompt</h3>
                    <p className="text-xs text-gray-500">v1.2.0</p>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="mb-4 relative">
                <input 
                  type="text" 
                  placeholder="Search prompts..." 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide">
                  <div className="px-3 py-1 bg-primary text-white rounded-full text-xs whitespace-nowrap">All</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs whitespace-nowrap">Writing</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs whitespace-nowrap">Programming</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs whitespace-nowrap">Marketing</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs whitespace-nowrap">Data</div>
                </div>
              </div>

              {/* Prompt Cards */}
              <div className="space-y-3 mb-6">
                <div className="border border-primary/20 bg-primary/5 p-3 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-primary">Content Writer</h4>
                    <div className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">Writing</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Write {`{type}`} content about {`{topic}`} in a {`{tone}`} tone for {`{audience}`}.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      4.9 (28 uses)
                    </div>
                    <button className="text-xs bg-primary text-white px-3 py-1 rounded-md">
                      Use
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 p-3 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Code Explainer</h4>
                    <div className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">Programming</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Explain this {`{language}`} code and suggest improvements: {`{code}`}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      4.7 (19 uses)
                    </div>
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
                      Use
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 p-3 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Data Analyst</h4>
                    <div className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">Data</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Analyze this {`{data_type}`} data and provide insights on {`{focus_area}`}.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      4.8 (12 uses)
                    </div>
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
                      Use
                    </button>
                  </div>
                </div>
              </div>

              {/* New Prompt Button */}
              <button className="w-full bg-primary text-white py-2 rounded-md font-medium flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create New Prompt
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-lg -rotate-6 opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 