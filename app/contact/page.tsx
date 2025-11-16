import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Avion School Supplies Ltd in Kampala, Uganda. Phone: 0745 280 289, 0777 408 026. Email: info@avionschoolsupplies.com',
  keywords: 'Avion contact, school supplies Uganda contact, Kampala school supplies, Avion phone number',
  openGraph: {
    title: 'Contact Avion School Supplies Ltd',
    description: 'Get in touch with us for quality school supplies in Uganda.',
    url: '/contact',
  },
};

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
              {/* WhatsApp Button */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <a
                  href="https://wa.me/256777408026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Chat on WhatsApp</h3>
                      <p className="text-white/90 text-sm">+256 777 408 026</p>
                    </div>
                  </div>
                  <div className="text-white group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </div>

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


