import React from 'react';

interface PricingFeatureProps {
  feature: string;
  included: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ feature, included }) => {
  return (
    <div className="flex items-center gap-2 py-2">
      {included ? (
        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span className={included ? 'text-gray-700' : 'text-gray-400'}>{feature}</span>
    </div>
  );
};

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, description, features, isPopular = false }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${isPopular ? 'ring-2 ring-primary' : ''}`}>
      {isPopular && (
        <div className="bg-primary text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500">/month</span>}
        </div>

        <div className="space-y-1">
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature.text} included={feature.included} />
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#"
            className={`block w-full text-center py-3 rounded-lg font-medium ${
              isPopular ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {price === 'Free' ? 'Sign Up' : 'Get Started'}
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Free',
      price: 'Free',
      description: 'For individuals just getting started with prompt engineering.',
      features: [
        { text: 'Up to 50 prompts', included: true },
        { text: 'Basic prompt editor', included: true },
        { text: 'Community templates', included: true },
        { text: 'Single AI model support', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Email support', included: false },
        { text: 'Collaborative workspace', included: false },
        { text: 'Advanced analytics', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'For professionals who need more power and features.',
      features: [
        { text: 'Unlimited prompts', included: true },
        { text: 'Advanced prompt editor', included: true },
        { text: 'Premium templates', included: true },
        { text: 'Multi-model support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Collaborative workspace (up to 3 users)', included: true },
        { text: 'API access', included: false },
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations with specific needs.',
      features: [
        { text: 'Unlimited everything', included: true },
        { text: 'Enterprise prompt editor', included: true },
        { text: 'Custom templates', included: true },
        { text: 'Unlimited model support', included: true },
        { text: 'Enterprise analytics', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Unlimited collaborative workspace', included: true },
        { text: 'Custom integrations', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that works best for you and your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 