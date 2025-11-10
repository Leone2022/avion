import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            📞 Contact Us
          </h1>
          <p className="text-xl text-white/90">
            We're here to help! Get in touch with us today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone Numbers */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:0745280289"
                        className="block text-lg text-gray-600 hover:text-primary transition-colors"
                      >
                        0745 280 289
                      </a>
                      <a
                        href="tel:0777408026"
                        className="block text-lg text-gray-600 hover:text-primary transition-colors"
                      >
                        0777 408 026
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@avionschoolsupplies.com"
                      className="text-lg text-gray-600 hover:text-primary transition-colors"
                    >
                      info@avionschoolsupplies.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-lg text-gray-600">
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <span className="text-3xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                      <div>Saturday: 9:00 AM - 5:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
              At Avion School Supplies, we pride ourselves on excellent customer service,
              competitive prices, and quality products. Led by Mr. Anthony Makhoha, we've
              been serving Uganda's educational community for over 10 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Browse Products
              </Link>
              <Link
                href="/about"
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


