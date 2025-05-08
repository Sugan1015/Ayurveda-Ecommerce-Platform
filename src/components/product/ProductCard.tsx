import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Badge for Featured or Best Seller */}
      {(product.featured || product.bestSeller) && (
        <div className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-medium text-white rounded ${
          product.bestSeller ? 'bg-amber-600' : 'bg-emerald-600'
        }`}>
          {product.bestSeller ? 'Best Seller' : 'Featured'}
        </div>
      )}
      
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-sm sm:text-base font-medium text-gray-800 hover:text-emerald-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <Star size={14} className="text-amber-500 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-xs text-gray-500">{product.reviews} reviews</span>
        </div>
        
        {/* Category */}
        <div className="mt-1">
          <Link to={`/category/${product.category}`} className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
        </div>
        
        {/* Price and Add to Cart */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-emerald-700 font-medium">${product.price.toFixed(2)}</span>
          
          <button 
            onClick={() => addToCart(product, 1)}
            className="text-sm flex items-center justify-center bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full hover:bg-emerald-100 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} className="mr-1" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;