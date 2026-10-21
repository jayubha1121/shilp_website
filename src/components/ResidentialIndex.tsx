import IndexRow from './IndexRow';
import SectionHeading from './SectionHeading';
import { residential } from '@data/project-sections';
import { getLiveProjectItems } from '@/lib/live-projects';
import type { LivePageBanner } from '@/lib/live-page-banners';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';

export default async function ResidentialIndex({ banner }: { banner: LivePageBanner | null }) {
  const items = await getLiveProjectItems('residential');
  return (
    <section className="shell py-10 sm:py-14">
      <div className="grid min-w-0 gap-8 md:grid-cols-12 md:gap-8">
        <div className="min-w-0 md:col-span-5">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none md:whitespace-nowrap">
            {residential.title}
          </SectionHeading>
          {banner && <div className="relative mt-8 aspect-[663/699] w-full overflow-hidden bg-[#e5e4df]">
            <ResponsiveBannerImage desktopImage={banner.desktopImage} mobileImage={banner.mobileImage} alt={banner.imageAlt} className="object-cover object-top" />
          </div>}
        </div>

        <div className="min-w-0 md:col-span-7">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none md:whitespace-nowrap">
            {residential.listTitle}
          </SectionHeading>

          <div className="mt-8 border-t border-hairline">
            {items.map((item) => (
              <IndexRow key={item.key} item={item} columns={[item.meta, item.typology, item.status]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}