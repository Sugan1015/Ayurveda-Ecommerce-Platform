import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-emerald-800' : 'text-emerald-800'}`}>
              AyurBliss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-emerald-600 transition-colors`}>
              Home
            </Link>
            <div className="relative group">
              <button className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-emerald-600 transition-colors flex items-center`}>
                Shop
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 hidden group-hover:block">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/shop"
                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 font-medium"
                >
                  All Products
                </Link>
              </div>
            </div>
            <Link to="/about" className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-emerald-600 transition-colors`}>
              About Ayurveda
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-emerald-600 transition-colors`}>
              Contact
            </Link>
          </nav>

          {/* Search, Cart and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-emerald-600 transition-colors`}>
              <Search size={20} />
            </Link>
            
            <button 
              className="relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open shopping cart"
            >
              <ShoppingBag size={20} className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-emerald-600 transition-colors`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} />
              ) : (
                <Menu size={24} className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="text-gray-800 font-medium mb-2">Shop Categories</p>
              <div className="pl-4 flex flex-col space-y-2">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/shop"
                  className="text-gray-800 hover:text-emerald-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Products
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Ayurveda
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;