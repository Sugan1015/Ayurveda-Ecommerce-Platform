import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import BenefitsSection from '../components/home/BenefitsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <CategorySection />
      <FeaturedProducts />
      <TestimonialSection />
      <NewsletterSection />
    </main>
  );
};

export default HomePage;