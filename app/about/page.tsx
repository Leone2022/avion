import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Avion School Supplies Ltd - Founded in 2015, we provide quality school supplies across Uganda. Led by Mr. Anthony Makhoha, serving Kampala and beyond.',
  keywords: 'Avion School Supplies, about Avion, Uganda school supplies, Kampala education, Anthony Makhoha',
  openGraph: {
    title: 'About Avion School Supplies Ltd',
    description: 'Founded in 2015, providing quality school supplies across Uganda.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Avion School Supplies
          </h1>
          <p className="text-xl text-white/90">
            Smart Shopping for Smart Minds
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-4">
              Founded in 2015, Avion School Supplies Ltd has been a trusted name in Uganda's
              educational sector. We specialize in providing high-quality school supplies to
              students, schools, and educational institutions across Kampala and beyond.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Under the leadership of Mr. Anthony Makhoha, we have built a reputation for
              excellence, reliability, and customer satisfaction. Our commitment to quality and
              affordability has made us a preferred supplier for thousands of students and
              educators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide affordable, high-quality school supplies that empower students
                and educators across Uganda to achieve their educational goals.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Uganda's leading school supplies provider, recognized for quality,
                service, and our commitment to educational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '✨', title: 'Quality', desc: 'Only the best for our customers' },
              { emoji: '🤝', title: 'Integrity', desc: 'Honest and transparent in all dealings' },
              { emoji: '💚', title: 'Service', desc: 'Customer satisfaction is our priority' },
              { emoji: '📚', title: 'Education', desc: 'Committed to supporting learning' },
              { emoji: '🌍', title: 'Community', desc: 'Building a better Uganda together' },
              { emoji: '🚀', title: 'Innovation', desc: 'Always improving our offerings' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-5xl mb-3">{value.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center text-white">
            <div className="text-6xl mb-6">👨‍💼</div>
            <h3 className="text-3xl font-bold mb-4">Mr. Anthony Makhoha</h3>
            <p className="text-xl mb-6">Owner & Founder</p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Leading Avion School Supplies with dedication and vision, Mr. Makhoha ensures
              that every student and school receives quality supplies at affordable prices.
              His commitment to education drives our mission forward every day.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '📚', title: 'Books & Notebooks', item: '36+ products' },
              { emoji: '✏️', title: 'Writing Supplies', item: 'Writing instruments' },
              { emoji: '📐', title: 'Geometry Tools', item: 'Mathematical sets' },
              { emoji: '🧹', title: 'Cleaning Supplies', item: 'School essentials' },
              { emoji: '🎨', title: 'Art Materials', item: 'Creative supplies' },
              { emoji: '🎒', title: 'Storage Solutions', item: 'Backpacks & organizers' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Shop?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our catalog and find everything you need for the school year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-primary hover:bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}



