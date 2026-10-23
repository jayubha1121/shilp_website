import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import { about } from '@data/about';

export default function About() {
  return (
    <section className="bg-[#f4f4f2] py-16 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="grid min-w-0 items-start gap-10 md:grid-cols-12 md:items-stretch md:gap-8 xl:gap-12">
          <div className="flex min-w-0 flex-col items-start md:col-span-4 xl:justify-between">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-none text-ink">
              {about.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <Link href={about.cta.href} className="pill mt-10 text-[12px] text-[#000000] hover:bg-[#000000] hover:text-white sm:mt-16 xl:mt-0">
              {about.cta.label}
              <Arrow direction="up-right" />
            </Link>
          </div>

          <div className="flex min-w-0 flex-col gap-6 pb-6 text-left text-[clamp(1rem,1.25vw,1.125rem)] leading-relaxed text-ink md:col-span-4 xl:text-justify">
            {about.paragraphs.map((text) => (
              <p key={text} className="max-w-[46ch]">
                {text}
              </p>
            ))}
          </div>

          <div className="relative aspect-[5/6] w-full min-w-0 overflow-hidden md:col-span-4">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
