'use client';

import { Product } from '@/lib/products';
import { useState } from 'react';
import { addToCart } from '@/lib/cart';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [added, setAdded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStockStatus = () => {
    if (!product.stock) return null;
    
    if (product.stock === 0) {
      return <span className="text-red-600 font-semibold">Out of Stock</span>;
    } else if (product.stock <= 10) {
      return <span className="text-orange-600 font-semibold">Only {product.stock} left!</span>;
    } else if (product.stock <= 30) {
      return <span className="text-yellow-600">Low stock</span>;
    }
    return <span className="text-green-600">In Stock</span>;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        {product.imageUrl && !imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-8xl">{product.emoji}</span>
          </div>
        )}
        
        {/* Stock Badge */}
        {product.stock !== undefined && product.stock <= 10 && (
          <div className="absolute bottom-3 right-3">
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              product.stock === 0 
                ? 'bg-red-500 text-white' 
                : 'bg-orange-500 text-white'
            }`}>
              {product.stock === 0 ? 'Out of Stock' : `${product.stock} left`}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category Badge */}
        {showCategory && (
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {product.category}
            </span>
          </div>
        )}

        {/* Brand */}
        {product.brand && (
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
            {product.brand}
          </p>
        )}

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Unit */}
        {product.unit && (
          <p className="text-xs text-gray-500 mb-2">
            Unit: <span className="font-semibold">{product.unit}</span>
          </p>
        )}

        {/* Stock Status */}
        <div className="mb-3 text-sm">
          {getStockStatus()}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (product.stock === 0) return;
                addToCart(product, 1);
                // notify other components (cart button / cart page)
                window.dispatchEvent(new Event('cart-updated'));
                setAdded(true);
                setTimeout(() => setAdded(false), 1400);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                product.stock === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg'
              }`}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Unavailable' : 'Add to Cart'}
            </button>
            {added && (
              <span className="text-sm text-green-600 font-semibold">Added ✓</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
