import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartButton from '@/components/CartButton';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Avion School Supplies Ltd - Smart Shopping for Smart Minds',
  description: 'Quality school supplies in Uganda. Books, notebooks, writing instruments, geometry tools, art supplies, and more!',
  keywords: 'school supplies, Uganda, Kampala, notebooks, books, pencils, pens, art supplies',
  authors: [{ name: 'Avion School Supplies Ltd' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
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


