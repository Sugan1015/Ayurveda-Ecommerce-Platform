import React from 'react';
import { Leaf, Heart, ShieldCheck, Flower } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "All of the ingredients in our products are natural; no dangerous chemicals or additives are used."
  },
  {
    icon: Heart,
    title: "Holistic Health",
    description: "Created using Ayurvedic principles to balance the body, mind, and spirit."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Every product is guaranteed to be of the greatest quality and purity through rigorous testing."
  },
  {
    icon: Flower,
    title: "Sustainable Sourcing",
    description: "Ingredients that are sourced ethically to help people and preserve the environment."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">Why Choose AyurBliss?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-4">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;