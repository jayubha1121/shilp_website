import Link from 'next/link';
import Arrow from './Arrow';
import type { ProjectItem } from '@/types/content';

interface IndexRowProps {
  item: ProjectItem;
  /** Small metadata strings shown between the project name and the year. */
  columns?: Array<string | undefined>;
}

export default function IndexRow({ item, columns = [] }: IndexRowProps) {
  const rowVariant = columns.length > 2 ? 'index-row--three' : 'index-row--two';
  const displayName = item.name.replace(/^SHILP\s+/i, '');

  return (
    <Link
      href={item.href}
      className={`index-row ${rowVariant} group text-[16px] text-slate transition-colors duration-200 hover:text-ink`}
    >
      <span className="truncate text-[14px] tracking-micro">{item.displayKey || item.key}</span>

      <span className="truncate text-[20px] uppercase tracking-micro text-ink sm:text-[22px]">
        {displayName}
      </span>

      {columns.map((value, i) => (
        <span key={i} className={`truncate ${i > 0 ? 'hidden sm:block' : ''}`}>
          {value}
        </span>
      ))}

      <span className="hidden text-right sm:block">{item.year}</span>

      <Arrow className="justify-self-end -rotate-45 opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
    </Link>
  );
}
