import Image from 'next/image';
import Link from 'next/link';
import type { StoryBannerContent } from '@/types/content';

export default function StoryBanner({ title, subtitle, image, imageAlt, href }: StoryBannerContent) {
  return (
    <section className="shell py-10 sm:py-14">
      <Link href={href} className="group relative block aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8]">
        <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="banner-type uppercase">{title}</h2>
          <p className="mt-4 max-w-[46ch] text-[9px] uppercase tracking-banner text-white/75 sm:text-[10px]">
            {subtitle}
          </p>
        </div>
      </Link>
    </section>
  );
}
