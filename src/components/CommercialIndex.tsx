import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import IndexRow from './IndexRow';
import SectionHeading from './SectionHeading';
import { commercial } from '@data/project-sections';
import { getLiveProjectItems } from '@/lib/live-projects';

export default async function CommercialIndex() {
  const items = await getLiveProjectItems('commercial');
  return (
    <section className="shell py-10 sm:py-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none max-w-[28ch]">
          {commercial.eyebrow}
        </SectionHeading>

        <Link href={commercial.cta.href} className="pill shrink-0 text-ink hover:bg-ink hover:text-white">
          {commercial.cta.label}
          <Arrow className="-rotate-45" />
        </Link>
      </div>

      <div className="relative mt-10 aspect-[16/9] w-full sm:mt-14">
        <Image src={commercial.banner} alt={commercial.bannerAlt} fill sizes="100vw" className="object-cover" />
      </div>

      <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-7">
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
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none lg:whitespace-nowrap">
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
