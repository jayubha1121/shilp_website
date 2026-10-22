import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import CareerOpenings from '@/components/CareerOpenings';
import ResponsiveBannerImage from '@/components/ResponsiveBannerImage';
import { getLiveProjectTree } from '@/lib/live-project-tree';
import { getLiveJobOpenings } from '@/lib/live-job-openings';
import { getLivePageBanner } from '@/lib/live-page-banners';

function ArrowMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.4">
      <path d="M3 13 13 3M4 3h9v9" />
    </svg>
  );
}

const team = [
  { name: 'Yash Brahmbhatt', role: 'Founder and Chief Executive Officer', image: '/images/team/yash-profile.png' },
  { name: 'Snehal Brahmbhatt', role: 'Director of Shilp Group', image: '/images/team/snehal-profile.png' },
  { name: 'Arpan Barot', role: 'Group General Manager', image: '/images/team/arpan-profile.png' },
  { name: 'Saumil Patel', role: 'General Manager - Sales', image: '/images/team/saumil-profile.png' },
];

function PageHero({
  label,
  title,
  description,
  image,
  mobileImage,
  imageAlt = '',
}: {
  label: string;
  title: string;
  description: string;
  image?: string;
  mobileImage?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[34rem] overflow-hidden bg-[#28343b] text-white sm:h-[calc(100svh-4.5rem)] sm:min-h-0">
      <ResponsiveBannerImage desktopImage={image} mobileImage={mobileImage} alt={imageAlt} priority />
      <div className="sr-only">
        <p>{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function IntroHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="grid gap-6 border-b border-black/10 pb-8 sm:grid-cols-[.8fr_1.2fr] sm:items-end sm:pb-10">
      <p className="text-[10px] uppercase tracking-[.2em] text-ink/50">{eyebrow}</p>
      <div>
        <h2 className="max-w-3xl text-[clamp(2rem,4.2vw,4rem)] font-light leading-[1.04] tracking-[-.045em]">{title}</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/65">{text}</p>
      </div>
    </div>
  );
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-white">{children}</main>
      <Footer />
    </>
  );
}

async function AboutPage() {
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

      <section className="shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Our story</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-.045em]">
            Place matters because people matter.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-[1.9] text-ink/65">
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
          <Link href="/our-work" className="pill mt-3 text-ink hover:bg-ink hover:text-white">
            Discover our work <ArrowMark />
          </Link>
        </div>
      </section>

      <section className="bg-[#f3f2ee] py-14 sm:py-20">
        <div className="shell grid gap-5 sm:grid-cols-3">
          {[
            ['2004', 'The year our story began'],
            ['20M+', 'Square feet developed'],
            ['55+', 'Landmark projects delivered'],
          ].map(([value, label]) => (
            <div key={value} className="border-t border-black/15 pt-5">
              <p className="text-[clamp(2.6rem,5vw,5rem)] font-light leading-none tracking-[-.06em]">{value}</p>
              <p className="mt-4 text-[10px] uppercase tracking-[.16em] text-ink/55">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
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

      <section className="bg-[#111] py-16 text-white sm:py-24">
        <div className="shell">
          <IntroHeading
            eyebrow="What guides us"
            title="Built with purpose. Grounded in trust."
            text="A long-term commitment to creating places that remain relevant and valuable long after they are built."
          />
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <article className="border-t border-white/20 pt-5">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/50">Our mission</p>
              <p className="mt-4 max-w-xl text-xl font-light leading-relaxed sm:text-2xl">
                Building world-class commercial and residential spaces that meet every need and create lasting
                value for customers, employees and the community.
              </p>
            </article>
            <article className="border-t border-white/20 pt-5">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/50">Our vision</p>
              <p className="mt-4 max-w-xl text-xl font-light leading-relaxed sm:text-2xl">
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
            <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">People behind the places</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.7rem)] font-light tracking-[-.045em]">Meet our team</h2>
          </div>
          <Link href="/our-team" className="pill self-start text-ink hover:bg-ink hover:text-white sm:self-auto">
            View the team <ArrowMark />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <div key={person.name} className="relative flex aspect-[4/4.5] flex-col justify-end overflow-hidden bg-[#eeede9] p-6 text-white">
              <Image src={person.image} alt={person.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative">
                <h3 className="mt-5 text-lg">{person.name}</h3>
                <p className="mt-1 text-xs text-white/80">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="border-t border-black/10 pt-8">
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">A showcase of success</p>
          <p className="mt-4 max-w-3xl text-2xl font-light leading-relaxed sm:text-3xl">
            Recognised for the places we create and the standards we uphold.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {['Realty Estate & Business Excellence Awards 2021', 'Realty Plus Conclave 2020 & 2021', 'Best Commercial Project 2018', 'Building Gujarat Awards 2018', 'Prop Realty Developer of the Year 2017'].map((award) => (
              <span key={award} className="border border-black/10 px-4 py-3 text-xs text-ink/65">{award}</span>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

async function TeamPage() {
  const banner = await getLivePageBanner('our-team');
  return (
    <PageFrame>
      <PageHero label="People of SHILP" title="Meet our team." description="A shared commitment to thoughtful development, strong relationships and places built to last." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell py-16 sm:py-24">
        <IntroHeading eyebrow="Leadership" title="Experience that shapes every detail." text="Meet the leadership team building the next chapter of SHILP Group." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <article key={person.name} className="group">
              <div className="relative flex aspect-[4/5] items-end overflow-hidden bg-[#eeede9] p-6 text-white">
                <Image src={person.image} alt={person.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <h2 className="mt-5 text-lg">{person.name}</h2>
              <p className="mt-1 text-xs leading-relaxed text-ink/55">{person.role}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#f3f2ee] py-16 sm:py-24">
        <div className="shell grid gap-10 sm:grid-cols-[.75fr_1.25fr] sm:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">One team, many talents</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-.045em]">Team SHILP</h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/65">A community of people bringing care, craft and collaboration to every project.</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-white">
            <Image src="/images/shilpteam.webp" alt="A Shilp development and the team spirit behind it" fill className="object-cover" sizes="(max-width: 640px) 100vw, 65vw" />
          </div>
        </div>
      </section>
      <section className="shell py-16 sm:py-20">
        <div className="flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-light tracking-[-.04em] sm:text-4xl">Want to build meaningful places with us?</h2>
          <Link href="/careers" className="pill self-start text-ink hover:bg-ink hover:text-white sm:self-auto">Explore careers <ArrowMark /></Link>
        </div>
      </section>
    </PageFrame>
  );
}

async function CareersPage() {
  const [{ openings, available }, banner] = await Promise.all([
    getLiveJobOpenings(),
    getLivePageBanner('careers'),
  ]);

  return (
    <PageFrame>
      <PageHero label="Careers" title="Be part of something great." description="Bring your talent and drive to a team built on collaboration, dedication and a commitment to quality." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <CareerOpenings openings={openings} available={available} />
    </PageFrame>
  );
}

async function ProjectOverviewPage() {
  const [{ items, available }, banner] = await Promise.all([
    getLiveProjectTree(),
    getLivePageBanner('project-overview'),
  ]);
  const years = items.map((item) => Number(item.year));
  const yearRange = years.length ? `${Math.min(...years)} — ${Math.max(...years)}` : 'Project portfolio';

  return (
    <PageFrame>
      <PageHero label="Explore" title="Our project tree." description="A growing portfolio of residential, commercial and plotted developments across Ahmedabad and GIFT City." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell py-14 sm:py-20">
        <div className="flex flex-col gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">{yearRange} · {items.length} projects</p>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-.05em]">Places made over time.</h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-ink/55">Explore our residential, commercial and plotted developments.</p>
        </div>
        <div className="mt-9 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <article key={project.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e4df]">
                <Image src={project.image} alt={project.imageAlt} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <span className="absolute left-4 top-4 bg-white/90 px-3 py-1.5 text-[10px] tracking-wide">{project.year}</span>
              </div>
              <div className="flex items-start justify-between gap-3 border-b border-black/10 py-4">
                <div>
                  <h3 className="text-lg font-normal">{project.title}</h3>
                  <p className="mt-1 text-xs text-ink/50">{project.location}</p>
                </div>
                <span className="pt-1 text-[9px] uppercase tracking-[.13em] text-ink/45">{project.type}</span>
              </div>
            </article>
          ))}
        </div>
        {!available && <p role="status" className="mt-8 border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Projects are temporarily unavailable. Please try again shortly.</p>}
        {available && items.length === 0 && <p className="mt-8 border border-black/10 bg-[#f8f7f4] p-6 text-sm text-ink/60">Project details will be added soon. Please contact our team for current project information.</p>}
      </section>
      <section className="bg-[#f3f2ee] py-16 sm:py-20">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Looking for a place of your own?</p><h2 className="mt-3 text-3xl font-light tracking-[-.04em] sm:text-4xl">Let&apos;s find the right project.</h2></div>
          <Link href="/contact-us" className="pill self-start text-ink hover:bg-ink hover:text-white sm:self-auto">Talk to our team <ArrowMark /></Link>
        </div>
      </section>
    </PageFrame>
  );
}

async function OurWorkPage() {
  const banner = await getLivePageBanner('our-work');
  const categories = [
    { name: 'Residential', headline: 'Spaces made for living well.', description: 'Thoughtful homes designed around the rhythms of everyday life.', image: '/images/image5.png' },
    { name: 'Commercial', headline: 'Places where business grows.', description: 'Distinctive workplaces and commercial destinations for a changing city.', image: '/images/image2.png' },
    { name: 'Plotted development', headline: 'Room to imagine what comes next.', description: 'Open possibilities and carefully considered places to build a future.', image: '/images/image7.png' },
  ];
  return (
    <PageFrame>
      <PageHero label="Our work" title="Places that move the city forward." description="From homes to workplaces, our projects are shaped by the people, neighbourhoods and ambitions around them." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell py-14 sm:py-20">
        <IntroHeading eyebrow="What we do" title="Different places. One thoughtful approach." text="Every development begins with a clear understanding of its setting and the people it is designed to serve." />
        <div className="mt-10 space-y-8">
          {categories.map((category, index) => (
            <article key={category.name} className={`grid overflow-hidden bg-[#f3f2ee] lg:grid-cols-2 ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
                <Image src={category.image} alt={`${category.name} by Shilp Group`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="flex flex-col items-start justify-center p-7 sm:p-12">
                <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">{category.name}</p>
                <h2 className="mt-4 max-w-md text-[clamp(1.8rem,3.5vw,3.2rem)] font-light leading-tight tracking-[-.04em]">{category.headline}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">{category.description}</p>
                <Link href="/project-overview" className="pill mt-7 text-ink hover:bg-ink hover:text-white">Explore projects <ArrowMark /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

async function ContactPage() {
  const banner = await getLivePageBanner('contact-us');
  return (
    <PageFrame>
      <PageHero label="Contact us" title="We’re here to help." description="Talk to our team about a home, a workplace or your next investment in Ahmedabad and GIFT City." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Visit or get in touch</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-.045em]">Let&apos;s start a conversation.</h2>
          <address className="mt-8 not-italic text-sm leading-relaxed text-ink/65">
            <strong className="font-medium text-ink">SHILP HOUSE</strong><br />
            Besides Rajpath Club, Rajpath Rangoli Road,<br />
            Bodakdev, Ahmedabad-380054,<br />
            Gujarat, India.
          </address>
          <div className="mt-7 space-y-3 text-sm">
            <a className="block hover:underline" href="tel:+919898211567">+91 9898211567</a>
            <a className="block hover:underline" href="tel:+919898508567">+91 9898508567</a>
            <a className="block text-ink/65 hover:text-ink" href="mailto:sales@shilp.co.in">sales@shilp.co.in</a>
            <a className="block text-ink/65 hover:text-ink" href="mailto:saumil@shilp.co.in">saumil@shilp.co.in</a>
          </div>
          <a className="pill mt-7 text-ink hover:bg-ink hover:text-white" href="https://maps.google.com/?q=Shilp+House+Rajpath+Rangoli+Road+Ahmedabad" target="_blank" rel="noreferrer">
            Get directions <ArrowMark />
          </a>
        </div>
        <div className="bg-[#f3f2ee] p-6 sm:p-10">
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Send an enquiry</p>
          <h2 className="mt-4 text-2xl font-light tracking-[-.035em] sm:text-3xl">How can we help?</h2>
          <p className="mt-3 text-xs leading-relaxed text-ink/55">Complete the form and your email app will open with your enquiry details.</p>
          <EnquiryForm kind="contact" />
        </div>
      </section>
      <section className="shell pb-16" aria-label="Find Shilp Group on the map">
        <div className="relative aspect-[16/7] min-h-72 overflow-hidden bg-[#e5e4df] sm:min-h-[26rem]">
          <iframe
            title="Shilp Group location on Google Maps"
            src="https://www.google.com/maps?output=embed&cid=11030215145385851353"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://www.google.com/maps?cid=11030215145385851353&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 rounded-full bg-white px-5 py-3 text-xs font-medium text-ink shadow-lg transition-colors hover:bg-ink hover:text-white"
          >
            Open in Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </PageFrame>
  );
}

const pageByRoute: Record<string, () => React.JSX.Element | Promise<React.JSX.Element>> = {
  'about-us': AboutPage,
  about: AboutPage,
  'our-team': TeamPage,
  team: TeamPage,
  'about/team': TeamPage,
  careers: CareersPage,
  career: CareersPage,
  'about/career': CareersPage,
  'project-overview': ProjectOverviewPage,
  'project-tree': ProjectOverviewPage,
  'about/project-tree': ProjectOverviewPage,
  'our-work': OurWorkPage,
  'about/our-work': OurWorkPage,
  'contact-us': ContactPage,
  contact: ContactPage,
};

export function getCompanyPage(route: string) {
  return pageByRoute[route];
}
