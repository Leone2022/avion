'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    emoji: '📚',
    title: 'Quality Products',
    description: 'We stock only the highest quality supplies from trusted manufacturers',
  },
  {
    emoji: '💰',
    title: 'Affordable Prices',
    description: 'Competitive pricing in Ugandan Shillings to fit every budget',
  },
  {
    emoji: '🚚',
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery service across Kampala and beyond',
  },
  {
    emoji: '🎓',
    title: 'Education Focus',
    description: 'Specialized in school supplies - we understand your needs',
  },
  {
    emoji: '⭐',
    title: 'Trusted Service',
    description: '10+ years of experience serving Uganda\'s educational community',
  },
  {
    emoji: '😊',
    title: 'Customer Care',
    description: 'Dedicated support from our friendly team led by Mr. Makhoha',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Avion?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best school supplies experience in Uganda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



