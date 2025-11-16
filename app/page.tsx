import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Avion School Supplies - Quality school supplies in Uganda. Shop books, notebooks, writing instruments, geometry tools, art supplies, and more. Fast delivery across Kampala.',
  keywords: 'Avion, Avion School Supplies, school supplies Uganda, Kampala, notebooks, books, pencils, pens',
  openGraph: {
    title: 'Avion School Supplies - Smart Shopping for Smart Minds',
    description: 'Quality school supplies in Uganda. Fast delivery across Kampala.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
}
