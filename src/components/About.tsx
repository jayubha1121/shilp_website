import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import { about } from '@data/about';

export default function About() {
  return (
    <section className="bg-[#f4f4f2] py-16 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.08] text-[#000000]">
              {about.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <Link href={about.cta.href} className="pill mt-10 text-[#000000] hover:bg-[#000000] hover:text-white sm:mt-16">
              {about.cta.label}
              <Arrow className="-rotate-45" />
            </Link>
          </div>

          <div className="text-[11px] leading-relaxed tracking-wide text-[#000000] lg:col-span-4">
            {about.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`max-w-[46ch] ${i === 1 ? 'mt-6 sm:mt-8' : ''} ${i === 2 ? 'mt-10 sm:mt-14' : ''}`}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="relative aspect-[5/6] w-full overflow-hidden lg:col-span-4">
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
