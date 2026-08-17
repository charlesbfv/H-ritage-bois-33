import type { BeforeAfterPair } from '../content/images';

interface Props {
  pair: BeforeAfterPair;
  className?: string;
}

export default function BeforeAfter({ pair, className = '' }: Props) {
  return (
    <div className={`grid grid-cols-2 gap-1.5 overflow-hidden rounded-2xl shadow-md ${className}`}>
      <div className="group relative aspect-[3/4] overflow-hidden">
        <img
          src={pair.avant}
          alt={pair.avantAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-2 left-2 rounded-full bg-wood/85 px-3 py-1 font-mont text-[11px] font-semibold uppercase tracking-wide text-beige">
          Avant
        </span>
      </div>
      <div className="group relative aspect-[3/4] overflow-hidden">
        <img
          src={pair.apres}
          alt={pair.apresAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-2 left-2 rounded-full bg-forest/90 px-3 py-1 font-mont text-[11px] font-semibold uppercase tracking-wide text-beige">
          Après
        </span>
      </div>
    </div>
  );
}
