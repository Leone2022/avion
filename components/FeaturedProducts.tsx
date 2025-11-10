'use client';

import { getFeaturedProducts } from '@/lib/products';
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⭐ Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most popular items that students and schools love
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-primary hover:bg-accent-blue text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}


