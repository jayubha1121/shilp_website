import { spirit } from '@data/journal';

export default function Spirit() {
  return (
    <section className="mt-10 flex min-h-[435px] items-end bg-gradient-to-b from-white to-[#d4d4d4] pb-24 text-[#000000] sm:mt-16">
      <div className="shell grid w-full gap-10 sm:grid-cols-12">
        <h2 className="flex flex-wrap gap-x-3 gap-y-1 text-section font-light sm:col-span-4 sm:flex-nowrap sm:whitespace-nowrap">
          {spirit.heading.map((line) => (
            <span key={line}>
              {line}
            </span>
          ))}
        </h2>

        <p className="w-full text-left text-[16px] leading-relaxed text-ink sm:col-span-6 sm:col-start-7 sm:justify-self-end">{spirit.body}</p>
      </div>
    </section>
  );
}
