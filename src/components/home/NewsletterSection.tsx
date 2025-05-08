import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Join Our Wellness Community</h2>
          <p className="text-emerald-100 mb-8">
            Subscribe to our newsletter for Ayurvedic tips, exclusive offers, and early access to new products.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-md transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-emerald-200 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;