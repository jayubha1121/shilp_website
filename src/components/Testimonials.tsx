import Carousel from './Carousel';
import SectionHeading from './SectionHeading';
import { testimonials } from '@data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 text-white sm:py-28">
      <div className="shell">
        <div className="grid gap-6 text-[#010101] sm:grid-cols-12">
          <SectionHeading className="sm:col-span-4">{testimonials.title}</SectionHeading>
          <p className="text-left text-[17px] leading-relaxed sm:col-span-6 sm:col-start-7 sm:justify-self-end">
            {testimonials.intro}
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <Carousel dark>
            {testimonials.items.map((item, i) => (
              <figure
                key={i}
                className="flex w-[82%] shrink-0 snap-start flex-col justify-between bg-[#000000B8] p-7 sm:w-[48%] lg:w-[31.5%]"
              >
                <blockquote className="text-left text-[11px] leading-relaxed text-white/70">{item.quote}</blockquote>
                <figcaption className="mt-10">
                  <p className="text-[12px]">{item.name}</p>
                  <p className="mt-1 text-[10px] text-white/45">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
