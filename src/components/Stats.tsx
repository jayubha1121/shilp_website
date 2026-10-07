import { stats } from '@data/about';

export default function Stats() {
  return (
    <section className="shell pb-16 sm:pb-24">
      <div className="grid gap-10 pt-10 sm:gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value}>
            <p className="text-figure font-light">{stat.value}</p>
            <p className="mt-4 text-[10px] uppercase tracking-micro text-ink">{stat.label}</p>
            <p className="mt-3 max-w-[38ch] text-[11px] leading-relaxed text-slate">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
