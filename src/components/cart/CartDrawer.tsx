import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-xl overflow-y-auto transition-transform transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-medium">Your Cart ({totalItems})</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some products to your cart and they will appear here.</p>
                <button 
                  onClick={onClose} 
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y">
                {cart.map(item => (
                  <li key={item.product.id} className="py-4">
                    <div className="flex items-start">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="ml-4 flex-grow">
                        <h4 className="text-sm font-medium">{item.product.name}</h4>
                        <p className="text-amber-600 font-medium">${item.product.price.toFixed(2)}</p>
                        
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-4 border-t mt-auto">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full bg-emerald-600 text-white text-center py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Checkout
              </Link>
              <button
                onClick={onClose}
                className="block w-full text-emerald-600 border border-emerald-600 text-center py-2 rounded-md mt-2 hover:bg-emerald-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;