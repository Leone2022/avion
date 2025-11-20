import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Avion School Supplies - Quality school supplies in Uganda. Shop Avion for books, notebooks, writing instruments, geometry tools, art supplies, and more. Fast delivery across Kampala. Avion - Your trusted school supplies store.',
  keywords: 'Avion, Avion School Supplies, Avion Uganda, Avion Kampala, school supplies Uganda, Kampala, notebooks, books, pencils, pens, Avion online store',
  openGraph: {
    title: 'Avion School Supplies - Smart Shopping for Smart Minds | Avion Uganda',
    description: 'Avion School Supplies - Quality school supplies in Uganda. Shop Avion today! Fast delivery across Kampala.',
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
