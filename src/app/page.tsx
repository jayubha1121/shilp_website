import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import CommercialIndex from '@/components/CommercialIndex';
import StoryBanner from '@/components/StoryBanner';
import ResidentialIndex from '@/components/ResidentialIndex';
import PlottedIndex from '@/components/PlottedIndex';
import Spirit from '@/components/Spirit';
import Journal from '@/components/Journal';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

import { familyBanner, contextBanner } from '@data/banners';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <CommercialIndex />
        <StoryBanner {...familyBanner} />
        <ResidentialIndex />
        <StoryBanner {...contextBanner} />
        <PlottedIndex />
        <Spirit />
        <Journal />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
