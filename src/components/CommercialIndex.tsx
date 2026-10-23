import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import IndexRow from './IndexRow';
import SectionHeading from './SectionHeading';
import { commercial } from '@data/project-sections';
import { getLiveProjectItems } from '@/lib/live-projects';
import type { LivePageBanner } from '@/lib/live-page-banners';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';

export default async function CommercialIndex({ banner }: { banner: LivePageBanner | null }) {
  const items = await getLiveProjectItems('commercial');
  const [firstTitleLine, secondTitleLine] = commercial.eyebrow.split(', ');
  return (
    <section className="shell py-10 sm:py-14">
      <div className="text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05]">
        <h2>{firstTitleLine},</h2>
        <div className="flex flex-col items-start gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-8">
          <h2 className="shrink-0 xl:whitespace-nowrap">{secondTitleLine}</h2>
          <Link href={commercial.cta.href} className="pill shrink-0 text-[12px] text-ink hover:bg-ink hover:text-white">
            {commercial.cta.label}
            <Arrow direction="up-right" />
          </Link>
        </div>
      </div>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-[#e5e4df] sm:mt-14">
        <ResponsiveBannerImage
          desktopImage={banner?.desktopImage || commercial.banner}
          mobileImage={banner?.mobileImage || banner?.desktopImage || commercial.banner}
          fallbackImage={commercial.banner}
          alt={banner?.imageAlt || commercial.bannerAlt}
        />
      </div>

      <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-7 lg:pr-12">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none">
            {commercial.listTitle}
          </SectionHeading>

          <div className="mt-10 border-t border-hairline">
            {items.map((item) => (
              <IndexRow key={item.key} item={item} columns={[item.meta, item.typology]} />
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none">
            {commercial.featureTitle}
          </SectionHeading>
          <div className="relative mt-8 aspect-[663/567] w-full overflow-hidden">
            <Image
              src={commercial.featureImage}
              alt={commercial.featureImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
