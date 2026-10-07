/**
 * Shared content types. Every file in `data/` is typed against these,
 * so editing content gives you autocomplete and catches typos at build time.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavEntry extends NavLink {
  /** Rendered as the hover dropdown panel in the header. */
  children: NavLink[];
}

export interface Site {
  name: string;
  tagline: string;
  description: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface FooterAddress {
  title: string;
  lines: string[];
}

export interface Footer {
  blurb: string;
  address: FooterAddress;
  columns: FooterColumn[];
  phones: string[];
  email: string;
  website: string;
  socials: NavLink[];
  legal: NavLink[];
  copyright: string;
}

export interface HeroMeta {
  configuration: string;
  status: string;
  project: string;
  location: string;
}

export interface Hero {
  kicker: string;
  title: string;
  meta: HeroMeta;
  image: string;
  imageAlt: string;
}

export interface About {
  heading: string[];
  paragraphs: string[];
  cta: NavLink;
  image: string;
  imageAlt: string;
}

export interface Stat {
  value: string;
  label: string;
  note: string;
}

/** One line in a project index table. */
export interface ProjectItem {
  key: string;
  displayKey?: string;
  name: string;
  meta: string;
  typology: string;
  year: string;
  href: string;
  /** Residential only — "Ready To Move", "Sample House", etc. */
  status?: string;
  /** Plotted only — plot area. */
  size?: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  category: string;
  location: string;
  status: string;
  projectState: string;
  statusPercentage: number;
  year: string;
  heroImage: string;
  mobileHeroImage: string;
  heroImageAlt: string;
  aboutImage: string;
  aboutImageAlt: string;
  amenitiesImage: string;
  amenitiesImageAlt: string;
  youtubeUrl: string;
  brochureUrl: string;
  intro: string;
  description: string;
  area: string;
  configuration: string;
  brochureLabel: string;
  floorPlans: { label: string; image: string }[];
  gallery: { src: string; alt: string }[];
  amenities: { title: string; image: string; alt: string }[];
  faqs: { question: string; answer: string }[];
  updatesTitle: string;
  updates: { date: string; image: string; title: string; alt: string }[];
  locationDescription: string;
  mapUrl: string;
  details: string;
}

export interface CommercialSection {
  eyebrow: string;
  cta: NavLink;
  banner: string;
  bannerAlt: string;
  listTitle: string;
  featureTitle: string;
  featureImage: string;
  featureImageAlt: string;
}

export interface ResidentialSection {
  title: string;
  image: string;
  imageAlt: string;
  listTitle: string;
}

export interface PlottedSection {
  title: string;
  featureTitle: string;
  featureImage: string;
  featureImageAlt: string;
}

export interface StoryBannerContent {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Spirit {
  heading: string[];
  body: string;
}

export interface JournalPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface JournalSection {
  title: string;
  intro: string;
  posts: JournalPost[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsSection {
  title: string;
  intro: string;
  items: Testimonial[];
}

export type ArrowDirection = 'left' | 'right' | 'up' | 'down';
