import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/products', label: 'Products' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
    ],
    categories: [
      { href: '/products?category=Books & Notebooks', label: '📚 Books' },
      { href: '/products?category=Writing Instruments', label: '✏️ Writing' },
      { href: '/products?category=Geometry Tools', label: '📐 Geometry' },
      { href: '/products?category=Art Supplies', label: '🎨 Art' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg">
                <img 
                  src="/logo.png" 
                  alt="Avion School Supplies Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="sr-only">Avion School Supplies Ltd - </span>Avion
                </div>
                <div className="text-sm text-white/80">School Supplies Ltd</div>
              </div>
            </Link>
            <p className="text-white/80 text-sm mb-4">
              Smart, Affordable and Stress-Free School Shopping
            </p>
            <p className="text-white/70 text-xs">
              Providing quality school supplies for Uganda since 2015
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Shop by Category</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <div>
                  <a href="tel:+256745280279" className="hover:text-white transition-colors">
                    0745 280 279 (WhatsApp)
                  </a>
                  <br />
                  <a href="tel:+256777408026" className="hover:text-white transition-colors">
                    0777 408 026 (Call)
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span>✉️</span>
                <a
                  href="mailto:antonymakokha75@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  antonymakokha75@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📱</span>
                <a
                  href="https://t.me/avionschoolsupplies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  t.me/avionschoolsupplies
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>🕐</span>
                <div>
                  <div>Mon-Fri: 8AM - 6PM</div>
                  <div>Sat: 9AM - 5PM</div>
                  <div>Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {currentYear} Avion School Supplies Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span>Designed by</span>
              <span className="font-semibold text-white">LeeTecSolutions</span>
              <span className="text-accent-yellow">⚡</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/60 text-xs">
              Owner: Mr. Antony Makokha | Building Uganda's Education Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



