import { hero } from '@data/hero';
import type { LivePageBanner } from '@/lib/live-page-banners';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';

export default function Hero({ banner }: { banner: LivePageBanner | null }) {
  const { kicker, title } = hero;
  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[34rem] w-full overflow-hidden bg-[#8ca0ad] text-white sm:h-[calc(100svh-4.5rem)] sm:min-h-0">
      {banner && <ResponsiveBannerImage
        desktopImage={banner.desktopImage}
        mobileImage={banner.mobileImage}
        alt={banner.imageAlt}
        priority
      />}
      <div className="absolute inset-0 bg-black/25" />
      <h1 className="sr-only">{kicker}: {title}</h1>
    </section>
  );
}
