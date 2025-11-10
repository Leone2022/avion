'use client';

import { Product } from '@/lib/products';
import { useState } from 'react';
import Link from 'next/link';
import { addToCart } from '@/lib/cart';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAdding) return;

    setIsAdding(true);
    addToCart(product, 1);
    
    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event('cart-updated'));
    
    setAdded(true);
    setTimeout(() => {
      setIsAdding(false);
      setAdded(false);
    }, 1000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image/Emoji */}
      <Link href={`/products#${product.id}`}>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center h-48 relative overflow-hidden group">
          <span className="text-6xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
            {product.emoji}
          </span>
          {product.featured && (
            <div className="absolute top-4 left-4 bg-accent-yellow text-primary px-3 py-1 rounded-full text-xs font-bold">
              ⭐ Featured
            </div>
          )}
          {isHovered && (
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl">👁️</span>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {showCategory && (
          <div className="text-xs text-gray-500 mb-2">{product.category}</div>
        )}
        <Link href={`/products#${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">{formatPrice(product.price)}</div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdding || added}
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              added
                ? 'bg-secondary text-white'
                : isAdding
                ? 'bg-gray-300 text-gray-600 cursor-wait'
                : 'bg-primary hover:bg-accent-blue text-white hover:shadow-lg'
            }`}
          >
            {added ? '✓ Added!' : isAdding ? 'Adding...' : '➕ Add'}
          </button>
        </div>
      </div>
    </div>
  );
}


