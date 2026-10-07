import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <>
      <Header />
      <main className="shell flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-12 text-center sm:min-h-[calc(100svh-4.5rem)] sm:py-16">
        <p className="max-w-full break-words text-[10px] uppercase tracking-[.2em] text-ink/50">{pageName}</p>
        <h1 className="mt-4 text-[clamp(2.5rem,8vw,6.5rem)] font-light leading-[1.05] tracking-[-.06em] sm:mt-5">
          Coming Soon
        </h1>
        <p className="mt-4 max-w-md text-xs leading-relaxed text-ink/60 sm:mt-5 sm:text-sm">
          We&apos;re preparing this page. Please check back soon.
        </p>
        <Link href="/" className="pill mt-7 text-ink hover:bg-ink hover:text-white sm:mt-9">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
