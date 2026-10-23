import Image from 'next/image';
import Link from 'next/link';
import { ArrowMark, IntroHeading, PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLivePageBanner } from '@/lib/live-page-banners';

export default async function OurWorkPage() {
  const banner = await getLivePageBanner('our-work');
  const categories = [
    { name: 'Residential', headline: 'Spaces made for living well.', description: 'Thoughtful homes designed around the rhythms of everyday life.', image: '/images/image5.png' },
    { name: 'Commercial', headline: 'Places where business grows.', description: 'Distinctive workplaces and commercial destinations for a changing city.', image: '/images/image2.png' },
    { name: 'Plotted development', headline: 'Room to imagine what comes next.', description: 'Open possibilities and carefully considered places to build a future.', image: '/images/image7.png' },
  ];
  return (
    <PageFrame>
      <PageHero label="Our work" title="Places that move the city forward." description="From homes to workplaces, our projects are shaped by the people, neighbourhoods and ambitions around them." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell py-14 sm:py-20">
        <IntroHeading eyebrow="" title="Different places. One thoughtful approach." text="Every development begins with a clear understanding of its setting and the people it is designed to serve." titleClassName="text-[clamp(1.6rem,3.2vw,2.8rem)]" />
        <div className="mt-10 space-y-8">
          {categories.map((category, index) => (
            <article key={category.name} className={`grid overflow-hidden bg-[#f3f2ee] lg:grid-cols-2 ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
                <Image src={category.image} alt={`${category.name} by Shilp Group`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="flex flex-col items-start justify-center p-7 sm:p-12">
                <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">{category.name}</p>
                <h2 className="mt-4 max-w-md text-[clamp(1.8rem,3.5vw,3.2rem)] font-light leading-tight tracking-[-.04em]">{category.headline}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">{category.description}</p>
                <Link href="/project-overview" className="pill mt-7 text-ink hover:bg-ink hover:text-white">Explore projects <ArrowMark /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
