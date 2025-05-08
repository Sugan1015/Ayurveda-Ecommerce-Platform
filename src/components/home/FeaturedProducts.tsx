import React from 'react';
import ProductGrid from '../product/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <ProductGrid 
      products={featuredProducts}
      title="Featured Products"
      subtitle="Discover our most popular Ayurvedic remedies curated for your wellness journey"
    />
  );
};

export default FeaturedProducts;