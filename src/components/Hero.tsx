import Image from 'next/image';
import { hero } from '@data/hero';

export default function Hero() {
  const { kicker, title, meta, image, imageAlt } = hero;
  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[34rem] w-full overflow-hidden bg-[#8ca0ad] text-white sm:h-[calc(100svh-4.5rem)] sm:min-h-0">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 h-full">
        <div className="shell flex h-full flex-col">
          <div className="pt-[clamp(8rem,20vh,12rem)]">
          <p className="text-[clamp(1rem,1.5vw,1.4rem)] font-light uppercase tracking-micro text-white/90">
            {kicker}
          </p>
          <h1 className="mt-1 whitespace-nowrap text-[clamp(2.5rem,4.5vw,4.5rem)] font-extralight uppercase leading-[1.02] tracking-[-0.01em] max-sm:whitespace-normal">
            {title}
          </h1>
          </div>

          <div className="mt-auto grid gap-4 pb-8 text-[11px] tracking-micro sm:gap-5 sm:pb-10 lg:pb-12">
            <div className="text-[11px] tracking-micro text-white/85">
              <p className="uppercase">{meta.configuration}</p>
              <p className="mt-1 text-white/60">{meta.status}</p>
            </div>
            <div className="text-[11px] tracking-micro text-white/85">
              <p className="uppercase">{meta.project}</p>
              <p className="mt-1 text-white/60">{meta.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
