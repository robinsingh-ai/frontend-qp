import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, company, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xl font-bold text-gray-500">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">
            {title}, {company}
          </p>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-10 h-10 text-primary/20 -translate-x-4 -translate-y-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <p className="text-gray-700">{quote}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "QuickPrompt has completely changed how I interact with AI. I've saved countless hours refining my prompts and getting better results from ChatGPT.",
      name: "Sarah Johnson",
      title: "Product Designer",
      company: "Design Co.",
    },
    {
      quote: "As an educator, I use AI daily to create curriculum materials. QuickPrompt has made this process so much more efficient and the results are consistently better.",
      name: "Michael Chen",
      title: "Educational Consultant",
      company: "EdTech Innovations",
    },
    {
      quote: "Our entire content team uses QuickPrompt to streamline our AI workflow. The collaborative features have been a game changer for our projects.",
      name: "Jessica Rodriguez",
      title: "Content Director",
      company: "Media Solutions",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Thousands of professionals use QuickPrompt to enhance their AI interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 