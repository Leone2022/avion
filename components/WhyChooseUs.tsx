'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    emoji: '✅',
    title: 'Wide Range of Products',
    description: 'From books to uniforms, we\'ve got it all.',
  },
  {
    emoji: '✅',
    title: 'Affordable & Stress-Free',
    description: 'Smart shopping for students and parents alike.',
  },
  {
    emoji: '✅',
    title: 'Convenient Online Access',
    description: 'Browse, order, and pay effortlessly.',
  },
  {
    emoji: '✅',
    title: 'Quality You Can Trust',
    description: 'Durable products for long-lasting use.',
  },
  {
    emoji: '📞',
    title: 'Excellent Customer Service',
    description: 'Dedicated support team always ready to help.',
  },
  {
    emoji: '🏆',
    title: 'Competitive Prices',
    description: 'Best value for your money with quality guaranteed.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Avion School Supplies?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Avion School Supplies, we pride ourselves on excellent customer service and competitive prices. We offer everything from scholastic to non-scholastic essentials for Uganda's future leaders.
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



