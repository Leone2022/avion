import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartButton from '@/components/CartButton';
import WhatsAppButton from '@/components/WhatsAppButton';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://avionschoolsupplies.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Avion School Supplies Ltd - Smart Shopping for Smart Minds',
    template: '%s | Avion School Supplies'
  },
  description: 'Avion School Supplies - Your trusted source for quality school supplies in Uganda. Shop books, notebooks, writing instruments, geometry tools, art supplies, and more. Fast delivery across Kampala and Uganda.',
  keywords: [
    'Avion',
    'Avion School Supplies',
    'school supplies Uganda',
    'school supplies Kampala',
    'notebooks Uganda',
    'books Uganda',
    'pencils Uganda',
    'pens Uganda',
    'art supplies Uganda',
    'geometry tools Uganda',
    'Picfare notebooks',
    'BIC pens',
    'Nataraj pencils',
    'Casio calculators',
    'school stationery Uganda',
    'educational supplies Kampala',
    'Avion Uganda',
    'Avion Kampala'
  ],
  authors: [{ name: 'Avion School Supplies Ltd' }],
  creator: 'Avion School Supplies Ltd',
  publisher: 'Avion School Supplies Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Avion School Supplies Ltd',
    title: 'Avion School Supplies Ltd - Smart Shopping for Smart Minds',
    description: 'Quality school supplies in Uganda. Books, notebooks, writing instruments, geometry tools, art supplies, and more! Fast delivery across Kampala.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Avion School Supplies Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avion School Supplies Ltd - Smart Shopping for Smart Minds',
    description: 'Quality school supplies in Uganda. Books, notebooks, writing instruments, geometry tools, art supplies, and more!',
    images: ['/logo.png'],
    creator: '@avionschoolsupplies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Education',
  classification: 'E-commerce, School Supplies, Education',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Avion School Supplies Ltd',
    description: 'Quality school supplies in Uganda. Books, notebooks, writing instruments, geometry tools, art supplies, and more!',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressCountry: 'UG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+256-777-408-026',
      contactType: 'Customer Service',
      email: 'info@avionschoolsupplies.com',
      areaServed: 'UG',
      availableLanguage: 'en',
    },
    sameAs: [
      // Add social media links when available
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Uganda',
    },
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CartButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}


