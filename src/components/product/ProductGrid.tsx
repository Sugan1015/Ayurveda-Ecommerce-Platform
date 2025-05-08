import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, subtitle }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">{title}</h2>}
            {subtitle && <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;