import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">AyurBliss</h3>
            <p className="text-emerald-100 mb-4">
              Authentic Ayurvedic products for your wellness journey. Natural remedies cultivated with ancient wisdom.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-amber-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-amber-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-amber-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-emerald-100 hover:text-amber-300 transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-amber-300 transition-colors">About Ayurveda</Link>
              </li>
              <li>
                <Link to="/blog" className="text-emerald-100 hover:text-amber-300 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-100 hover:text-amber-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-emerald-100 hover:text-amber-300 transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-emerald-100 hover:text-amber-300 transition-colors">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/faq" className="text-emerald-100 hover:text-amber-300 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-emerald-100 hover:text-amber-300 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-emerald-100 mb-4">Stay updated with our new products and special offers.</p>
            <form className="flex flex-col space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-emerald-200">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-12 pt-8 text-sm text-center text-emerald-200">
          <p>&copy; {currentYear} AyurBliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;