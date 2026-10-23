import Image from 'next/image';
import Link from 'next/link';
import { ArrowMark, IntroHeading, PageFrame, PageHero, team } from '@/components/CompanyPageShared';
import { getLivePageBanner } from '@/lib/live-page-banners';
import { stats } from '@data/about';

export default async function AboutPage() {
  const banner = await getLivePageBanner('about-us');
  return (
    <PageFrame>
      <PageHero
        label="Who we are"
        title="Trust in Shilp. Build your future."
        description="Thoughtfully designed homes, workplaces and communities for a changing Ahmedabad."
        image={banner?.desktopImage}
        mobileImage={banner?.mobileImage}
        imageAlt={banner?.imageAlt}
      />

      <section className="shell grid items-start gap-10 py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="m-0 text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-.045em]">
            Place matters because people matter.
          </h2>
        </div>
        <div className="text-base leading-[1.65] text-ink/65">
          <div className="space-y-4">
            <p>
              SHILP Group is an Ahmedabad-based real estate developer creating thoughtfully designed residential,
              commercial and plotted developments across Ahmedabad and GIFT City. Founded in 2004 by Mr Yash
              Brahmbhatt, SHILP has grown from its early beginnings with a small land acquisition into a recognised
              name among the city&apos;s leading real estate developers.
            </p>
            <p>
              We have developed 20 million+ square feet and delivered over 55 landmark projects. From pioneering
              development on Sindhu Bhavan Road to shaping new neighbourhoods, each project is guided by quality,
              trust and a lasting understanding of the people who will use it.
            </p>
            <p>
              Development is more than constructing buildings. It is about creating places that support lives,
              enable businesses, strengthen communities and contribute meaningfully to the city.
            </p>
          </div>
          <Link href="/our-work" className="pill mt-6 text-ink hover:bg-ink hover:text-white">
            Discover our work <ArrowMark />
          </Link>
        </div>
      </section>

      <section className="bg-[#f3f2ee] py-14 sm:py-20">
        <div className="mx-auto grid w-full min-w-0 grid-cols-1 gap-5 px-5 sm:grid-cols-3 sm:px-8 lg:px-20">
          {stats.map((stat) => (
            <div key={stat.value} className="min-w-0 border-t border-black/15 pt-5">
              <p className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight">{stat.value}</p>
              <p className="mt-4 text-[11px] uppercase leading-relaxed tracking-[.12em] text-ink/65">{stat.label}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e4df]">
          <Image src="/images/image2.png" alt="Architectural illustration of a Shilp tower" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">The SHILP belief</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.7rem)] font-light leading-[1.05] tracking-[-.045em]">
            We believe places influence lives.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/65">
            Thoughtful environments create opportunity. Trust is earned through consistency, craft reflects
            responsibility, and growth should strengthen a city&apos;s identity. We believe development extends
            beyond construction.
          </p>
        </div>
      </section>

      <section className="bg-[#111] py-12 text-white sm:py-16">
        <div className="shell">
          <IntroHeading
            eyebrow="What guides us"
            title="Built with purpose. Grounded in trust."
            text="A long-term commitment to creating places that remain relevant and valuable long after they are built."
            titleClassName="text-[clamp(1.5rem,3vw,2.8rem)]"
            centered
          />
          <div className="mt-8 grid gap-7 sm:grid-cols-2">
            <article className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/50">Our mission</p>
              <p className="mt-3 max-w-xl text-base font-light leading-relaxed sm:text-lg">
                Building world-class commercial and residential spaces that meet every need and create lasting
                value for customers, employees and the community.
              </p>
            </article>
            <article className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/50">Our vision</p>
              <p className="mt-3 max-w-xl text-base font-light leading-relaxed sm:text-lg">
                To be the obvious, most trusted choice in real estate—creating a better, liveable and comfortable
                life for everyone.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.7rem)] font-light tracking-[-.045em]">Meet our team</h2>
          </div>
          <Link href="/our-team" className="pill self-start text-ink hover:bg-ink hover:text-white sm:self-auto">
            View the team <ArrowMark />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <div key={person.name}>
              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#eeede9]">
                <Image src={person.image} alt={person.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <h3 className="mt-4 text-lg">{person.name}</h3>
              <p className="mt-1 text-sm text-ink/60">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="border-t border-black/10 pt-8">
          <div className="mb-7 max-w-lg">
            <h2 className="text-xl text-ink/70 sm:text-2xl">A Showcase Of Success</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">
              Explore our collection of prestigious awards that reflect our dedication to our mission and values.
            </p>
          </div>
          <div className="awards-marquee overflow-hidden" aria-label="Awards and recognition">
            <div className="animate-awards-scroll flex w-max">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1}>
                  {[
                    'Realty Estate & Business Excellence Awards 2021',
                    'Realty Plus Conclave 2020',
                    'Realty Plus Conclave 2021',
                    'Realty Plus Conclave Best Commercial Project 2018',
                    'Building Gujarat Awards 2018',
                    'Prop Realty Developer of the Year 2017',
                    'Times Man of the Year',
                    'Divya Bhaskar The Luminary Awards',
                    'Optimal Media Best Commercial Project of Ahmedabad 2018',
                    'GIHED Credai Property Show 2018',
                    'NAR Olympiad 2018',
                  ].map((award) => (
                    <article key={award} className="h-48 w-64 shrink-0 bg-[#fafafa] p-5 sm:h-52 sm:w-72 sm:p-6">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-ink/70" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4-1v6m-3 3h6m-8 2h10l-2-3h-6l-2 3Z" />
                        <path d="m12 5 .8 1.6 1.8.3-1.3 1.2.3 1.8L12 9l-1.6.9.3-1.8-1.3-1.2 1.8-.3L12 5Z" />
                      </svg>
                      <p className="mt-5 text-sm leading-relaxed text-ink/75 sm:text-base">{award}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
