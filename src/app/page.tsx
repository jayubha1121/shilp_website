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
import { getLivePageBanners } from '@/lib/live-page-banners';

import { familyBanner, contextBanner } from '@data/banners';

export default async function HomePage() {
  const banners = await getLivePageBanners();
  const bannerFor = (page: 'home' | 'commercial' | 'residential' | 'plotted') => banners?.find((item) => item.page === page) || null;
  return (
    <>
      <Header />
      <main>
        <Hero banner={bannerFor('home')} />
        <About />
        <Stats />
        <CommercialIndex banner={bannerFor('commercial')} />
        <StoryBanner {...familyBanner} banner={bannerFor('residential')} />
        <ResidentialIndex />
        <StoryBanner {...contextBanner} banner={bannerFor('plotted')} />
        <PlottedIndex />
        <Spirit />
        <Journal />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
