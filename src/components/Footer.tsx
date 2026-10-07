import Link from 'next/link';
import Wordmark from './Wordmark';
import { footer } from '@data/site';

export default function Footer() {
  const emails = footer.email.split('|').map((e) => e.trim());

  return (
    <footer className="bg-[#000000E5] pb-6 pt-28 text-white">
      <div className="shell px-10">
        <Wordmark size="sm" variant="white" className="w-64 leading-none" />

        <div className="mt-10 grid gap-8 sm:grid-cols-[1.2fr_1.2fr_.7fr_1fr] sm:gap-x-8">
          <p className="max-w-[34ch] text-[13px] leading-relaxed text-white/55">
            {footer.blurb}
          </p>

          <address className="max-w-[32ch] not-italic text-[13px] leading-relaxed text-white/55">
            {footer.address.title}, {footer.address.lines.join(' ')}
          </address>

          <div className="contents">
            {footer.columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="whitespace-nowrap text-[13px] text-white/55 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-28 grid gap-6 border-b border-white/10 pb-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-white/55">
            {footer.phones.map((phone, i) => (
              <span key={phone} className="flex items-center gap-2">
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {phone}
                </a>
                {i < footer.phones.length - 1 && <span className="text-white/30">|</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[13px] text-white/55">
            {emails.map((email, i) => (
              <span key={email} className="flex items-center gap-2">
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
                {i < emails.length - 1 && <span className="text-white/30">|</span>}
              </span>
            ))}
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end">
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[12px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <ul className="flex gap-6">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}