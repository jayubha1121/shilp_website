'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { team } from '@/components/CompanyPageShared';

type Person = (typeof team)[number];
const networks = [
  { key: 'facebook', label: 'Facebook', src: '/social_media/facebook.svg' },
  { key: 'instagram', label: 'Instagram', src: '/social_media/instagram.svg' },
  { key: 'linkedin', label: 'LinkedIn', src: '/social_media/linked.svg' },
  { key: 'x', label: 'X', src: '/social_media/x.svg' },
] as const;

function SocialBar({ person }: { person: Person }) {
  return <div className="mt-4 flex gap-3" aria-label={`${person.name} social links`}>
    {networks.map(({ key, label, src }) => {
      const href = person.social[key];
      const icon = <Image src={src} alt="" width={32} height={32} className="h-8 w-8 object-contain" />;
      return href ? <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={`${person.name} on ${label}`} className="grid h-12 w-12 place-items-center bg-[#eeedf0] transition hover:-translate-y-0.5">{icon}</a> : <span key={key} title={`${label} link to be added`} aria-label={`${label} link to be added`} className="grid h-12 w-12 place-items-center bg-[#eeedf0]">{icon}</span>;
    })}
  </div>;
}

export default function TeamLeadership() {
  const [selected, setSelected] = useState<Person | null>(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  return <>
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((person) => <article key={person.name} className="group">
        <button type="button" onClick={() => setSelected(person)} aria-label={`Read more about ${person.name}`} className="block w-full text-left">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#eeede9]">
            <Image src={person.image} alt={person.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 right-4 rounded-full border border-white/70 px-4 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">View profile ↗</span>
          </div>
          <h2 className="mt-5 text-lg font-normal tracking-tight">{person.name}</h2>
          <p className="mt-1 text-sm leading-relaxed text-ink/55">{person.role}</p>
        </button>
        <SocialBar person={person} />
      </article>)}
    </div>

    {selected && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-[2px] sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="team-profile-name" className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:p-6 lg:p-7">
        <button type="button" onClick={() => setSelected(null)} aria-label="Close profile" className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-3xl font-light leading-none text-ink transition hover:bg-black/5">×</button>
        <div className="grid items-center gap-4 sm:grid-cols-[minmax(220px,.8fr)_1.2fr] sm:gap-7">
          <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[310px] overflow-hidden rounded-xl bg-[#eeede9] sm:aspect-[4/4.5] sm:max-w-[340px]">
            <Image src={selected.image} alt={selected.name} fill className="object-cover" sizes="(max-width: 640px) 90vw, 42vw" />
          </div>
          <div className="pt-1 sm:pt-3">
            <h2 id="team-profile-name" className="pr-10 text-2xl font-light tracking-[-.035em] sm:text-3xl">{selected.name}</h2>
            <p className="mt-1.5 text-base text-ink/55 sm:text-lg">{selected.role}</p>
            <p className="mt-3 text-sm leading-[1.55] text-ink/65 sm:mt-4 sm:text-[15px]">{selected.bio}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2.5 sm:mt-5">
          {networks.map(({ key, label, src }) => {
            const href = selected.social[key];
            const icon = <Image src={src} alt="" width={28} height={28} className="h-7 w-7 object-contain" />;
            return href ? <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={`${selected.name} on ${label}`} className="transition hover:-translate-y-0.5">{icon}</a> : <span key={key} aria-label={`${label} link to be added`} title={`${label} link to be added`} className="opacity-90">{icon}</span>;
          })}
        </div>
      </section>
    </div>}
  </>;
}
