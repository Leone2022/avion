'use client';

import { useState, useEffect } from 'react';
import { CartItem, getCart, removeFromCart, updateCartQuantity, clearCart, getCartTotal } from '@/lib/cart';
import Link from 'next/link';
import { Product } from '@/lib/products';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    loadCart();
    
    const handleStorageChange = () => {
      loadCart();
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cart-updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cart-updated', handleStorageChange);
    };
  }, []);

  const loadCart = () => {
    setCartItems(getCart());
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    loadCart();
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setIsUpdating(true);
    updateCartQuantity(productId, quantity);
    setTimeout(() => {
      loadCart();
      setIsUpdating(false);
      window.dispatchEvent(new Event('cart-updated'));
    }, 100);
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      loadCart();
      window.dispatchEvent(new Event('cart-updated'));
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <Link
              href="/products"
              className="inline-block bg-primary hover:bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900">🛒 Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={handleClear}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 w-32 h-32 flex items-center justify-center">
                    <span className="text-5xl">{item.product.emoji}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{item.product.category}</p>
                  <p className="text-xl font-bold text-primary mb-4">
                    {formatPrice(item.product.price)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-semibold">Quantity:</label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        disabled={isUpdating}
                        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-bold transition-all duration-300"
                      >
                        -
                      </button>
                      <span className="w-16 text-center font-bold text-xl">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        disabled={isUpdating}
                        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-bold transition-all duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtotal & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <div className="text-right mb-4">
                    <div className="text-gray-600 text-sm">Subtotal</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.product.id)}
                    className="text-red-600 hover:text-red-700 font-semibold px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 sticky bottom-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Order Summary</h2>
            <div className="text-right">
              <div className="text-gray-600 text-sm">Total Items</div>
              <div className="text-xl font-bold text-primary">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-6 mb-6">
            <div className="flex justify-between text-xl font-semibold text-gray-700 mb-2">
              <span>Subtotal:</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping:</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          <div className="border-t-2 border-primary pt-6 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">Total:</span>
              <span className="text-3xl font-bold text-primary">{formatPrice(total)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <button className="flex-1 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            📞 Need help? Call us at 0745 280 289 or 0777 408 026
          </p>
        </div>
      </div>
    </div>
  );
}


