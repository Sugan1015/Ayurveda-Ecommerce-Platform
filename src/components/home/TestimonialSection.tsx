import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Yoga Instructor",
    image: "https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg",
    quote: "The Ashwagandha supplement has been a game-changer for my stress levels. I feel more balanced and energetic throughout my busy day of teaching yoga classes.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Software Engineer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    quote: "I've tried many natural supplements for focus, but the Brahmi tincture from AyurBliss is by far the most effective. My productivity at work has improved significantly.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Holistic Nutritionist",
    image: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg",
    quote: "I recommend AyurBliss products to all my clients. The quality is exceptional, and the Triphala supplement has helped many with digestive issues. Truly authentic Ayurvedic products.",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">What Our Customers Say</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Discover how AyurBliss products have improved the lives of our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-6 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonial.rating ? 'text-amber-500 fill-current' : 'text-gray-300'} mx-0.5`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;