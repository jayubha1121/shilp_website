import { spirit } from '@data/journal';

export default function Spirit() {
  return (
    <section className="mt-10 flex min-h-[435px] items-end bg-gradient-to-b from-white to-[#d4d4d4] pb-24 text-[#000000] sm:mt-16">
      <div className="shell grid w-full gap-10 sm:grid-cols-12">
        <h2 className="text-figure font-light sm:col-span-4">
          {spirit.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="max-w-[78ch] text-[16px] leading-relaxed text-[#000000] sm:col-span-8">{spirit.body}</p>
      </div>
    </section>
  );
}
