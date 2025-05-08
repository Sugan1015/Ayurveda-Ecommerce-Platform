import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-16 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/7615574/pexels-photo-7615574.jpeg)',
        filter: 'brightness(0.65)'
      }}></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
            Ancient Wisdom for Modern Wellness
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Discover authentic Ayurvedic remedies carefully crafted to bring balance and harmony to your body, mind, and spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/shop"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center"
            >
              Shop Now
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/about"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center"
            >
              Learn About Ayurveda
            </Link>
          </div>
        </div>
        
        {/* Floating Leaf Animation */}
        <div className="absolute -bottom-16 right-4 md:right-16 w-32 h-32 animate-float-slow opacity-70 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/6692971/pexels-photo-6692971.jpeg" 
            alt="Ayurvedic herbs" 
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;