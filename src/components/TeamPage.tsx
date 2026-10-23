
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowMark,
  IntroHeading,
  PageFrame,
  PageHero,
  team,
} from '@/components/CompanyPageShared';
import { getLivePageBanner } from '@/lib/live-page-banners';

const collageImages = [
  {
    front: {
      src: '/ourteam/image1.png',
      alt: 'SHILP construction team at a project site',
    },
    back: {
      src: '/ourteam/image5.png',
      alt: 'Additional SHILP team photo',
    },
    className:
      'left-[17%] top-0 h-[54%] w-[39%]',
    sizes: '(max-width: 1024px) 45vw, 24vw',
  },
  {
    front: {
      src: '/ourteam/image2.png',
      alt: 'SHILP team walking through a construction site',
    },
    back: {
      src: '/ourteam/image6.png',
      alt: 'Additional SHILP team photo',
    },
    className:
      'left-[2%] top-[31%] z-10 h-[45%] w-[43%] border-4 border-white shadow-xl sm:left-[2%]',
    sizes: '(max-width: 1024px) 45vw, 25vw',
  },
  {
    front: {
      src: '/ourteam/image3.png',
      alt: 'SHILP team members reviewing project plans',
    },
    back: {
      src: '/ourteam/image7.png',
      alt: 'Additional SHILP team photo',
    },
    className: 'right-0 top-[16%] h-[52%] w-[36%]',
    sizes: '(max-width: 1024px) 40vw, 23vw',
  },
  {
    front: {
      src: '/ourteam/image4.png',
      alt: 'SHILP team members coordinating at a project site',
    },
    back: {
      src: '/ourteam/image8.png',
      alt: 'Additional SHILP team photo',
    },
    className:
      'bottom-0 left-[43%] z-20 h-[47%] w-[37%] border-4 border-white shadow-xl',
    sizes: '(max-width: 1024px) 40vw, 23vw',
  },
];

export default async function TeamPage() {
  const banner = await getLivePageBanner('our-team');

  return (
    <PageFrame>
      {/* Hero Section */}
      <PageHero
        label="People of SHILP"
        title="Meet our team."
        description="A shared commitment to thoughtful development, strong relationships and places built to last."
        image={banner?.desktopImage}
        mobileImage={banner?.mobileImage}
        imageAlt={banner?.imageAlt}
      />

      {/* Leadership Team Section */}
      <section className="shell py-16 sm:py-24">
        <IntroHeading
          eyebrow=""
          title="Experience that shapes every detail."
          text="Meet the leadership team building the next chapter of SHILP Group."
          titleClassName="text-[clamp(1.6rem,3.2vw,2.8rem)]"
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <article key={person.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eeede9]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <h2 className="mt-5 text-lg font-normal tracking-tight">
                {person.name}
              </h2>

              <p className="mt-1 text-sm leading-relaxed text-ink/55">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Team story and image collage */}
      <section className="bg-white py-8 sm:py-12 lg:py-6">
        <div className="shell grid items-center gap-8 lg:min-h-[min(78svh,700px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative h-[min(78vw,560px)] min-h-[420px] overflow-hidden rounded-2xl bg-transparent sm:h-[min(65vw,620px)] sm:min-h-[500px] lg:h-[min(78svh,700px)] lg:min-h-0">
            {collageImages.map((image) => (
              <div
                key={image.front.src}
                role="group"
                aria-label={`${image.front.alt}; hover or focus to see another photo`}
                tabIndex={0}
                className={`team-flip-card absolute overflow-hidden transition duration-300 hover:z-30 hover:scale-[1.03] focus-visible:z-30 focus-visible:scale-[1.03] ${image.className}`}
              >
                <div className="team-flip-inner">
                  <div className="team-flip-face">
                    <Image
                      src={image.front.src}
                      alt={image.front.alt}
                      fill
                      className="object-cover"
                      sizes={image.sizes}
                    />
                  </div>
                  <div className="team-flip-face team-flip-back" aria-hidden="true">
                    <Image
                      src={image.back.src}
                      alt={image.back.alt}
                      fill
                      className="object-cover"
                      sizes={image.sizes}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-xl text-ink/65 lg:py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">The people behind SHILP</p>
            <h2 className="mt-3 text-2xl font-light leading-tight tracking-[-.04em] text-ink sm:text-3xl lg:text-[clamp(1.75rem,2.7vw,2.5rem)]">
              Thoughtful work begins with a strong team.
            </h2>
            <p className="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
              At SHILP Group, every meaningful place is shaped by people who care about the details. Our team brings experience across planning, design, construction and customer relationships, working together from the first idea through to the finished space.
            </p>
            <p className="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
              We believe lasting relationships make better developments. By listening closely, sharing knowledge and taking responsibility for every decision, our people create places that serve communities today and grow with them over time.
            </p>
            <p className="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
              That shared commitment is what connects our leadership team and guides the way we build, collaborate and look ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="shell py-16 sm:py-20">
        <div className="flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-light tracking-[-.04em] sm:text-4xl">
            Want to build meaningful places with us?
          </h2>

          <Link
            href="/careers"
            className="pill self-start text-ink hover:bg-ink hover:text-white sm:self-auto"
          >
            Explore careers <ArrowMark />
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
