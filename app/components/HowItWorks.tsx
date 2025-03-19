import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          {number}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-primary/30 my-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Install the Extension',
      description: 'Add QuickPrompt to Chrome from the Web Store in just one click. No account required to get started.',
    },
    {
      title: 'Create Your Prompts',
      description: 'Build a library of effective prompts. Use variables, formatting, and organize them into categories.',
    },
    {
      title: 'Visit Any AI Platform',
      description: 'Open ChatGPT, Bard, Claude or any text-based AI tool in your browser.',
    },
    {
      title: 'Use Your Prompts',
      description: 'Click the QuickPrompt icon, select your prompt, fill in any variables if needed, and insert it directly.',
    },
    {
      title: 'Save & Refine',
      description: 'Rate your prompts based on results, refine them over time, and build your personal collection of effective prompts.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
              WORKFLOW
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-gradient">QuickPrompt</span> Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes with our simple browser extension workflow.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.003h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.366zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
              </svg>
              Get Started with Chrome Extension
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 