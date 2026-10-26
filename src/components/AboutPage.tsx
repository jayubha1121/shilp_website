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
        <div className="text-sm leading-[1.65] text-ink/65">
          <div className="space-y-4">
            <p>
              SHILP Group is an Ahmedabad-based real estate developer creating thoughtfully designed residential, commercial and plotted developments across Ahmedabad and GIFT City. Founded in 2004 by Mr Yash Brahmbhatt, SHILP has grown from its early beginnings with a small land acquisition in real estate development into a recognised name among top builders and real estate developers in Ahmedabad. We have developed 20 million+ square feet and delivered over 55 landmark projects across the city, shaping Ahmedabad’s skyline with a portfolio defined by distinctive architecture. We were the first to develop projects on Sindhu Bhavan Road, now a prime location, and continue to pioneer strategic real estate developments.
            </p>
            <p>
              For us, development is not merely about constructing buildings. For decades, SHILP has followed a clear philosophy centred on quality, trust and thoughtful development. We are known for identifying upcoming areas and creating modern, dynamic structures that meet market needs. Each project builds on this foundation, creating spaces that remain relevant across generations.
            </p>
            <details className="group">
              <summary className="w-fit cursor-pointer list-inside text-sm text-ink underline underline-offset-4">
                <span className="group-open:hidden">Read more</span>
                <span className="hidden group-open:inline">Read less</span>
              </summary>
              <div className="mt-4 space-y-4">
                <p>
                  At the heart of SHILP is a simple belief: Place Matter because People Matter. Real estate development goes beyond constructing buildings; it is about creating place that support lives, enable businesses, strengthen communities and contribute meaningfully to the city. Guided by craftsmanship, responsibility, trust and thoughtful development, we strive to create spaces that remain relevant and valuable long after construction ends.
                </p>
                <p>SHILP is building more than real estate in Ahmedabad. We are creating place that matter.</p>
              </div>
            </details>
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

      <section className="shell grid items-center gap-8 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e4df]">
          <Image src="/images/image2.png" alt="People meeting in a bright office" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="min-w-0 font-sans">
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">The SHILP belief</p>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.1rem)] font-light leading-[1.05] tracking-[-.045em]">
            We believe places influence lives.
          </h2>
          <div className="mt-5 space-y-1 text-base leading-[1.5]">
            <p><span className="text-ink/55">We believe</span> thoughtful environments create opportunity.</p>
            <p><span className="text-ink/55">We believe</span> trust is earned through consistency.</p>
            <p><span className="text-ink/55">We believe</span> craft reflects responsibility.</p>
            <p><span className="text-ink/55">We believe</span> growth should strengthen identity.</p>
            <p><span className="text-ink/55">We believe</span> cities deserve meaningful contribution.</p>
            <p><span className="text-ink/55">We believe</span> development extends beyond construction.</p>
          </div>
          <p className="mt-4 text-base leading-[1.5]">
            And we believe that the most valuable places are those that continue creating value long after they are
            built.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-4 rounded-full border border-ink px-7 py-2 text-base transition-colors hover:bg-ink hover:text-white sm:px-8"
          >
            Schedule A Visit
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              <ArrowMark />
            </span>
          </Link>
        </div>
      </section>

      <section className="shell pb-16 sm:pb-24">
        <div className="flex items-center gap-4 sm:gap-7">
          <span className="h-px flex-1 bg-black/20" />
          <h2 className="shrink-0 text-xl font-light text-ink/70 sm:text-2xl">Why SHILP</h2>
          <span className="h-px flex-1 bg-black/20" />
        </div>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink/65 sm:mt-10 sm:text-base">
          <p>
            Choosing a property is choosing more than a building. It is choosing a place, a neighbourhood, a future
            and a developer you can trust. SHILP brings together deep local understanding, thoughtful development
            and a long-term commitment to creating places that matter, making it a compelling choice for those
            looking to buy property in Ahmedabad or GIFT City.
          </p>
          <p>
            SHILP&apos;s journey began in Ahmedabad, and that local understanding continues to shape where and how we
            develop. From pioneering development on Sindhu Bhavan Road to creating homes and commercial spaces
            across Bodakdev, Science City, Thaltej, Gota, Shilaj, Shela, Vaishnodevi and other evolving corridors,
            SHILP has consistently identified locations with the potential to become important parts of the city&apos;s
            future.
          </p>
          <p>
            SHILP&apos;s expertise extends across residential projects, commercial developments and plotted
            developments, giving us a broader understanding of how homes, workplaces, businesses and communities
            come together to shape a city.
          </p>
          <p>
            SHILP&apos;s commitment to the next chapter of Gujarat&apos;s growth extends to GIFT City, where we have
            established a significant presence across residential and commercial development, reflecting our
            ambition to create future-ready spaces within one of India&apos;s most important emerging business
            destinations.
          </p>
          <p className="font-medium text-ink/75">Designed With Purpose. Crafted With Responsibility. A Developer Built on Trust</p>
          <p>
            Buying a home, office or investment property is a significant decision. SHILP therefore places
            importance on quality, integrity, customer trust, commitment and responsible execution. Our corporate
            philosophy emphasises delivering projects on time and building long-term relationships with customers
            and partners.
          </p>
          <p className="font-medium text-ink/75">A Place to Invest. A Place to Belong.</p>
          <p>
            Because the right developer doesn&apos;t simply build your property. The right developer helps create the
            place your future becomes part of. At SHILP, Place Matters.
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
