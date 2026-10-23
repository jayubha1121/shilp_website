import { stats } from '@data/about';

export default function Stats() {
  return (
    <section className="shell pb-16 sm:pb-24">
      <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {stats.map((stat) => (
          <div key={stat.value} className="min-w-0">
            <p className="text-[clamp(1.75rem,3.2vw,3.25rem)] font-light leading-tight">{stat.value}</p>
            <p className="mt-5 text-left text-[13px] uppercase leading-relaxed text-ink sm:text-sm">{stat.label}</p>
            <p className="mt-4 text-left text-sm leading-relaxed text-slate">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
