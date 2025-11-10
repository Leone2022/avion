import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of school supplies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: '📚', name: 'Books', href: '/products?category=Books & Notebooks' },
              { emoji: '✏️', name: 'Writing', href: '/products?category=Writing Instruments' },
              { emoji: '📐', name: 'Geometry', href: '/products?category=Geometry Tools' },
              { emoji: '🧹', name: 'Cleaning', href: '/products?category=Cleaning Supplies' },
              { emoji: '🎨', name: 'Art', href: '/products?category=Art Supplies' },
              { emoji: '🎒', name: 'Storage', href: '/products?category=Storage Solutions' },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to stock up on quality supplies?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today or browse our complete catalog
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


