'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 inline-block">
              <img 
                src="/logo.png" 
                alt="Avion School Supplies Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="text-accent-yellow">Avion</span>{' '}
            <span>School Supplies</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Smart Shopping for Smart Minds
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Quality supplies for Uganda's brightest students. From notebooks to art supplies,
            we have everything your educational journey needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>🛍️</span>
              <span>Shop Now</span>
            </Link>
            <Link
              href="/about"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>ℹ️</span>
              <span>Learn More</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { emoji: '📦', number: '36+', label: 'Products' },
              { emoji: '🎓', number: '6', label: 'Categories' },
              { emoji: '⭐', number: '10+', label: 'Years' },
              { emoji: '😊', number: '1000+', label: 'Happy Customers' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-white/60 text-2xl">⬇️</div>
      </motion.div>
    </section>
  );
}



