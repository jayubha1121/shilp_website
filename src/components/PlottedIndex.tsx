import Image from 'next/image';
import IndexRow from './IndexRow';
import SectionHeading from './SectionHeading';
import { plotted } from '@data/project-sections';
import { getLiveProjectItems } from '@/lib/live-projects';

export default async function PlottedIndex() {
  const items = await getLiveProjectItems('plotted');
  return (
    <section className="shell py-10 sm:py-14">
      <div className="grid min-w-0 gap-8 md:grid-cols-12 md:items-start md:gap-8">
        <div className="min-w-0 md:col-span-7 md:pr-12">
          <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none">
            {plotted.title}
          </SectionHeading>

          <div className="mt-8 border-t border-hairline">
            {items.map((item) => (
              <IndexRow key={item.key} item={item} columns={[item.meta, item.size, item.typology]} />
            ))}
          </div>
        </div>

      <div className="min-w-0 lg:col-span-5">
              <SectionHeading className="!text-[clamp(1.5rem,2.5vw,2.625rem)] !font-light !leading-none">
                {plotted.featureTitle}
              </SectionHeading>
              <div className="relative mt-8 aspect-[663/567] w-full overflow-hidden">
                <Image
                  src={plotted.featureImage}
                  alt={plotted.featureImageAlt}
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
