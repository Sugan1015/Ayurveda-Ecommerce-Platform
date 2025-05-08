import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { products, getProductsByCategory, categories } from '../data/products';
import { Product } from '../types';

const ProductListingPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get current category
  const currentCategory = categoryId 
    ? categories.find(cat => cat.id === categoryId) 
    : null;
  
  // Filter and sort products
  useEffect(() => {
    let filtered = categoryId 
      ? getProductsByCategory(categoryId) 
      : [...products];
    
    // Filter by price
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.bestSeller && !b.bestSeller) return -1;
          if (!a.bestSeller && b.bestSeller) return 1;
          return 0;
        });
    }
    
    setFilteredProducts(filtered);
  }, [categoryId, priceRange, sortBy]);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">
            {currentCategory ? currentCategory.name : 'All Products'}
          </h1>
          {currentCategory && (
            <p className="mt-2 text-gray-600">{currentCategory.description}</p>
          )}
        </div>
        
        {/* Filters and Sort */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden flex items-center text-gray-700 bg-gray-100 px-4 py-2 rounded-md"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} className="mr-2" />
              Filters
              <ChevronDown size={16} className={`ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Filter and Sort Controls */}
            <div className={`w-full md:w-auto md:flex items-center gap-4 ${isFilterOpen ? 'block' : 'hidden md:flex'}`}>
              {/* Price Range */}
              <div className="mb-4 md:mb-0">
                <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    id="price-range"
                    min="0"
                    max="100"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Sort Dropdown */}
            <div className="w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Product Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredProducts.length} products</p>
        </div>
        
        {/* Products */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductListingPage;