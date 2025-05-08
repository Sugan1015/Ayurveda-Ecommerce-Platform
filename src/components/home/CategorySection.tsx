import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategorySection: React.FC = () => {
  const backgroundImages = [
    'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg', // Haircare
    'https://images.pexels.com/photos/3737600/pexels-photo-3737600.jpeg', // Skincare
    'https://images.pexels.com/photos/6631265/pexels-photo-6631265.jpeg', // Beverages
    'https://images.pexels.com/photos/4020557/pexels-photo-4020557.jpeg', // Supplements
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">Shop by Category</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Explore our carefully curated collections of authentic Ayurvedic products
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-64"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{ 
                backgroundImage: `url(${backgroundImages[index]})`,
              }}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-emerald-100 mb-4">{category.description}</p>
                <span className="inline-block text-sm font-medium text-white border-b border-white pb-1 w-fit group-hover:border-amber-400 transition-colors duration-300">
                  Explore Products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;