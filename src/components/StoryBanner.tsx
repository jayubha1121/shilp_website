import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';
import type { LivePageBanner } from '@/lib/live-page-banners';
import type { StoryBannerContent } from '@/types/content';

export default function StoryBanner({ title, subtitle, image, imageAlt, banner }: StoryBannerContent & { banner?: LivePageBanner | null }) {
  return (
    <section className="shell py-10 sm:py-14">
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8]">
        <ResponsiveBannerImage
          desktopImage={banner?.desktopImage || image}
          mobileImage={banner?.mobileImage || banner?.desktopImage || image}
          fallbackImage={image}
          alt={banner?.imageAlt || imageAlt}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="text-[clamp(1.7rem,7vw,3.5rem)] font-extralight uppercase leading-none tracking-[.2em]">
            {title}
          </h2>
          <p className="mt-5 max-w-full border border-white/70 px-3 py-2 text-[9px] uppercase tracking-[.18em] sm:mt-6 sm:px-4 sm:text-xs">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
