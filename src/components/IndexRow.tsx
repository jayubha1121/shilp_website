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
      className={`index-row ${rowVariant} group text-left text-[16px] text-slate transition-colors duration-200 hover:text-ink`}
    >
      <span className="truncate text-[14px]">{item.displayKey || item.key}</span>

      <span className="truncate text-[20px] uppercase text-ink sm:text-[22px]">
        {displayName}
      </span>

      {columns.map((value, i) => (
        <span key={i} className={`truncate ${i > 0 ? 'hidden sm:block' : ''}`}>
          {value}
        </span>
      ))}

      <span className="hidden text-right sm:block">{item.year}</span>

      <Arrow direction="up-right" className="justify-self-end opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
    </Link>
  );
}
