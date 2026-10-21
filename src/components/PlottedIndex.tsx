import IndexRow from './IndexRow';
import SectionHeading from './SectionHeading';
import { plotted } from '@data/project-sections';
import { getLiveProjectItems } from '@/lib/live-projects';
import type { LivePageBanner } from '@/lib/live-page-banners';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';

export default async function PlottedIndex({ banner }: { banner: LivePageBanner | null }) {
  const items = await getLiveProjectItems('plotted');
  return (
    <section className="shell py-10 sm:py-14">
      <div className="grid min-w-0 gap-8 md:grid-cols-12 md:gap-8">
        <div className="min-w-0 md:col-span-7">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none md:whitespace-nowrap">
            {plotted.title}
          </SectionHeading>

              <div className="mt-16 border-t border-hairline sm:mt-40">
            {items.map((item) => (
              <IndexRow key={item.key} item={item} columns={[item.meta, item.size, item.typology]} />
            ))}
          </div>
        </div>

        <div className="min-w-0 md:col-span-5">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none md:whitespace-nowrap">
            {plotted.featureTitle}
          </SectionHeading>
          {banner && <div className="relative mt-8 aspect-[664/566] w-full overflow-hidden bg-[#e5e4df] md:w-[90%]">
            <ResponsiveBannerImage desktopImage={banner.desktopImage} mobileImage={banner.mobileImage} alt={banner.imageAlt} className="object-cover object-top" />
          </div>}
        </div>
      </div>
    </section>
  );
}
