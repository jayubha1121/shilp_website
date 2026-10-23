import Image from 'next/image';
import Link from 'next/link';
import Carousel from './Carousel';
import SectionHeading from './SectionHeading';
import { journal } from '@data/journal';

export default function Journal() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="grid gap-6 sm:grid-cols-12">
        <SectionHeading className="sm:col-span-4">{journal.title}</SectionHeading>
        <p className="text-left text-[16px] leading-relaxed sm:col-span-6 sm:col-start-7 sm:justify-self-end">{journal.intro}</p>
      </div>

      <div className="mt-12 sm:mt-16">
        <Carousel>
          {journal.posts.map((post, i) => (
            <Link
              key={`${post.href}-${i}`}
              href={post.href}
              className="group w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-5 text-[14px] font-normal leading-snug">{post.title}</h3>
              <p className="mt-2 max-w-[42ch] text-left text-[11px] leading-relaxed text-slate">{post.excerpt}</p>
              <p className="mt-4 text-[10px] text-slate">{post.date}</p>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
