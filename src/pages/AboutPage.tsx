import React from 'react';
import { Leaf, Feather, Sun, Moon, Cloud, Wind } from 'lucide-react';
import NewsletterSection from '../components/home/NewsletterSection';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/6692618/pexels-photo-6692618.jpeg)',
          filter: 'brightness(0.5)'
        }}></div>
        
        <div className="container mx-auto relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
              The Ancient Wisdom of Ayurveda
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Discover the 5,000-year-old system of natural healing that has its origins in the Vedic culture of India.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6 text-center">
              What is Ayurveda?
            </h2>
            
            <p className="text-gray-700 mb-4">
              Ayurveda, which translates to "knowledge of life," is one of the world's oldest holistic healing systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.
            </p>
            
            <p className="text-gray-700 mb-4">
              The primary focus of Ayurveda is to promote good health, rather than fight disease. However, treatments may be recommended for specific health problems.
            </p>
            
            <p className="text-gray-700 mb-4">
              At AyurBliss, we are committed to bringing you authentic Ayurvedic products that follow traditional formulations while meeting modern standards of quality and purity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Doshas */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
              The Three Doshas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              According to Ayurvedic theory, every individual has a unique mix of three doshas, which determines their physiological and psychological characteristics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vata */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wind size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Vata</h3>
              <p className="text-gray-600 mb-4">
                Associated with air and space, Vata governs movement and is responsible for basic body processes such as breathing, cell division, and circulation.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Elements:</strong> Air and Space
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Qualities:</strong> Dry, light, cold, rough, subtle, mobile
              </p>
            </div>
            
            {/* Pitta */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Pitta</h3>
              <p className="text-gray-600 mb-4">
                Associated with fire and water, Pitta governs digestion, metabolism, and energy production. It maintains temperature and intelligence.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Elements:</strong> Fire and Water
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Qualities:</strong> Hot, sharp, light, oily, liquid, mobile
              </p>
            </div>
            
            {/* Kapha */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Kapha</h3>
              <p className="text-gray-600 mb-4">
                Associated with earth and water, Kapha forms the body's structure and provides physical strength and immune support. It maintains body moisture.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Elements:</strong> Earth and Water
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Qualities:</strong> Heavy, slow, cold, oily, smooth, dense, soft, stable
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
              Core Principles of Ayurveda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayurveda is founded on several key principles that guide its approach to health and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Leaf size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Balance of Doshas</h3>
                <p className="text-gray-600">
                  Health exists when there is a balance between the three doshas. Imbalance leads to disease.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Moon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Constitution (Prakriti)</h3>
                <p className="text-gray-600">
                  Each person has a unique constitution determined at conception, which influences their physical and psychological characteristics.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Feather size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Food as Medicine</h3>
                <p className="text-gray-600">
                  Ayurveda places great emphasis on diet and nutrition, believing that proper food is essential for healing and maintaining health.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Sun size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Mind-Body Connection</h3>
                <p className="text-gray-600">
                  Mental and physical health are deeply connected, and proper mental health is essential for physical wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Commitment */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Our Commitment to Authenticity</h2>
            <p className="text-emerald-100 mb-6">
              At AyurBliss, we are dedicated to preserving the authenticity and efficacy of traditional Ayurvedic remedies while ensuring they meet modern standards of quality and safety.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={32} className="text-emerald-200" />
                </div>
                <h3 className="text-lg font-medium mb-2">Authentic Formulations</h3>
                <p className="text-emerald-100 text-sm">
                  We follow traditional Ayurvedic recipes and preparation methods.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={32} className="text-emerald-200" />
                </div>
                <h3 className="text-lg font-medium mb-2">Ethical Sourcing</h3>
                <p className="text-emerald-100 text-sm">
                  Our ingredients are sustainably harvested and ethically sourced.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={32} className="text-emerald-200" />
                </div>
                <h3 className="text-lg font-medium mb-2">Quality Testing</h3>
                <p className="text-emerald-100 text-sm">
                  All products undergo rigorous quality and purity testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
};

export default AboutPage;