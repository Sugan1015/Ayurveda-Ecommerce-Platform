import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Check, ShoppingBag, ChevronRight, Heart } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'reviews'>('description');
  const { addToCart } = useCart();
  
  // Get product details
  const product = getProductById(Number(productId));
  
  // Get related products
  const relatedProducts = product
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)
    : [];
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-medium text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/shop" 
            className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/shop" className="hover:text-emerald-600 transition-colors">Shop</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link 
            to={`/category/${product.category}`} 
            className="hover:text-emerald-600 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-700">{product.name}</span>
        </nav>
        
        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-white shadow-sm">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Information */}
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-gray-300'} mr-0.5`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="text-2xl text-emerald-700 font-medium mb-6">${product.price.toFixed(2)}</div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Benefits:</h3>
              <ul className="space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-gray-700">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <button 
                  className="p-3 border border-gray-300 rounded-md text-gray-500 hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} />
                </button>
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-red-500'} mr-2`}></div>
                <span className="text-sm">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 text-center border-b-2 font-medium text-sm md:text-base ${
                  activeTab === 'description' 
                    ? 'border-emerald-600 text-emerald-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors`}
              >
                Description
              </button>
              {product.ingredients && (
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`py-4 px-1 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeTab === 'ingredients' 
                      ? 'border-emerald-600 text-emerald-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } transition-colors`}
                >
                  Ingredients
                </button>
              )}
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 text-center border-b-2 font-medium text-sm md:text-base ${
                  activeTab === 'reviews' 
                    ? 'border-emerald-600 text-emerald-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors`}
              >
                Reviews ({product.reviews})
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">{product.description}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Key Benefits:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'ingredients' && product.ingredients && (
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Ingredients:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  * All ingredients are sourced ethically and sustainably.
                </p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        className={`${i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-gray-300'} mr-1`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-2xl font-medium text-gray-800">{product.rating}</span>
                  <span className="ml-2 text-gray-600">based on {product.reviews} reviews</span>
                </div>
                
                <p className="text-gray-700 italic">
                  "This product has been amazing for my wellness routine. I've noticed significant improvements since I started using it."
                </p>
                
                <div className="mt-8">
                  <Link 
                    to="#"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-md transition-colors inline-flex items-center"
                  >
                    Write a Review
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;