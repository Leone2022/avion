'use client';

import { Product } from '@/lib/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  showCategory?: boolean;
}

export default function ProductGrid({ products, showCategory = false }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showCategory={showCategory} />
      ))}
    </div>
  );
}


