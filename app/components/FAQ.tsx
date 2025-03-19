import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the QuickPrompt Chrome extension
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">How do I install QuickPrompt?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                QuickPrompt is available on the Chrome Web Store. Simply click the "Add to Chrome" button on our store page, and the extension will be installed in seconds. Once installed, you'll see the QuickPrompt icon in your browser's extension toolbar.
              </p>
            </details>
          </div>

          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">Does QuickPrompt work with all AI platforms?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Yes! QuickPrompt works with all major AI platforms including ChatGPT, Claude, Bard, Perplexity, and any other text-based AI interface. Our extension is designed to be platform-agnostic, allowing you to use your prompts anywhere you need them.
              </p>
            </details>
          </div>

          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">How do templates with variables work?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Templates allow you to create reusable prompts with customizable parts. When you create a prompt, you can include variables like {`{topic}`}, {`{tone}`}, or {`{context}`}. When you use the prompt, QuickPrompt will ask you to fill in these variables, making your prompts more flexible and powerful without having to rewrite them each time.
              </p>
            </details>
          </div>

          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">Is my data synced across devices?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Yes! QuickPrompt syncs your prompt library across all your devices using your Google account. This means your prompts will be available on any computer where you're signed into Chrome with the same account. Your data is securely stored and only accessible to you.
              </p>
            </details>
          </div>

          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">Can I import prompts from other sources?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Absolutely! QuickPrompt allows you to import prompts in JSON or CSV format. You can also export your prompt library for backup or to share with colleagues. This makes it easy to build and share collections of effective prompts for different purposes.
              </p>
            </details>
          </div>

          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">Is QuickPrompt free to use?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                QuickPrompt offers both free and premium plans. The free version includes essential features like prompt saving and basic categorization. Premium unlocks advanced features like unlimited prompts, template variables, performance tracking, and priority support. Check our website for current pricing details.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 