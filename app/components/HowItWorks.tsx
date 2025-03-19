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
      title: 'Create Your Account',
      description: 'Sign up for free and get access to the QuickPrompt platform. No credit card required.',
    },
    {
      title: 'Design Your Prompts',
      description: 'Use our intuitive editor to craft powerful prompts for any AI model. Start from scratch or use a template.',
    },
    {
      title: 'Test and Refine',
      description: 'Try your prompts directly within the platform. Get instant feedback and make improvements.',
    },
    {
      title: 'Share and Collaborate',
      description: 'Invite team members to collaborate on prompts or share them with the community.',
    },
    {
      title: 'Monitor Performance',
      description: 'Track how your prompts perform over time and receive AI-powered suggestions for optimization.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-gradient">QuickPrompt</span> Works
            </h2>
            <p className="text-lg text-gray-600">
              Start creating better AI prompts in minutes with our simple 5-step process.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
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
            <a href="#" className="btn btn-primary">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 