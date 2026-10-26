import EnquiryForm from '@/components/EnquiryForm';
import { ArrowMark, PageFrame, PageHero } from '@/components/CompanyPageShared';
import { getLivePageBanner } from '@/lib/live-page-banners';

export default async function ContactPage() {
  const banner = await getLivePageBanner('contact-us');
  return (
    <PageFrame>
      <PageHero label="Contact us" title="We’re here to help." description="Talk to our team about a home, a workplace or your next investment in Ahmedabad and GIFT City." image={banner?.desktopImage} mobileImage={banner?.mobileImage} imageAlt={banner?.imageAlt} />
      <section className="shell grid items-start gap-10 py-12 sm:gap-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <div>
            <h2 className="w-fit border-b border-black/40 pb-1 text-[clamp(1.45rem,2.4vw,2.25rem)] font-light leading-tight text-ink/70">
              Contact Us
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-[1.65] text-ink/65">
              <h3 className="text-base font-normal text-ink">We’re Here to Help</h3>
              <p>
                Have questions about our residential or commercial projects? Looking for more details about a
                property?
              </p>
              <p>
                Whether you are exploring a new home, considering a commercial investment, or simply need more
                information about our projects, our experts are ready to assist you with the right guidance.
              </p>
              <p>
                Get in touch with Shilp Group and take the next step towards finding the right space for you.
              </p>
            </div>
          </div>
          <div className="mt-10 space-y-7 sm:mt-14">
            <div className="flex items-start gap-5 text-sm leading-7 text-ink/65">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="mt-1 h-8 w-8 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <address className="not-italic">
                Shilp House, Besides Rajpath Club, Rajpath Rangoli Road, Bodakdev, Ahmedabad-380054, Gujarat, India.
              </address>
            </div>
            <div className="flex items-start gap-5">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="mt-1 h-8 w-8 shrink-0">
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <circle cx="12" cy="18" r="1" fill="currentColor" />
              </svg>
              <div className="grid gap-1 text-sm leading-7">
                <a className="w-fit hover:text-ink/60" href="tel:+919898211567">+91 9898211567</a>
                <a className="w-fit hover:text-ink/60" href="tel:+919898508567">+91 9898508567</a>
              </div>
            </div>
            <div className="grid gap-2 pl-[3.25rem] text-sm text-ink/65 sm:grid-cols-2 lg:grid-cols-1">
              <a className="w-fit hover:text-ink" href="mailto:sales@shilp.co.in">sales@shilp.co.in</a>
              <a className="w-fit hover:text-ink" href="mailto:saumil@shilp.co.in">saumil@shilp.co.in</a>
            </div>
            <a className="pill text-ink hover:bg-ink hover:text-white" href="https://maps.google.com/?q=Shilp+House+Rajpath+Rangoli+Road+Ahmedabad" target="_blank" rel="noreferrer">
              Get directions <ArrowMark />
            </a>
          </div>
        </div>
        <div className="min-w-0 border border-black/[0.04] bg-[#f5f4f1] p-6 sm:p-9 lg:p-10">
          <p className="text-[10px] uppercase tracking-[.2em] text-ink/45">Send an enquiry</p>
          <h2 className="mt-4 text-2xl font-light tracking-[-.035em] sm:text-3xl">How can we help?</h2>
          <p className="mt-3 text-xs leading-relaxed text-ink/55">Complete the form and your email app will open with your enquiry details.</p>
          <EnquiryForm kind="contact" />
        </div>
      </section>
      <section className="shell pb-12 sm:pb-16" aria-label="Find Shilp Group on the map">
        <div className="relative aspect-[16/7] min-h-64 overflow-hidden bg-[#e5e4df] sm:min-h-[24rem]">
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
