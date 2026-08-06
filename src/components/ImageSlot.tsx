import type { ImageSlot as ImageSlotType } from '../content/images';

interface Props {
  slot: ImageSlotType;
  index: number;
  className?: string;
}

export default function ImageSlot({ slot, index, className = '' }: Props) {
  if (slot.src) {
    return (
      <img
        src={slot.src}
        alt={slot.alt}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-stone/40 bg-wood/5 text-center text-stone ${className}`}
    >
      <span className="font-mont text-xs font-semibold uppercase tracking-wide">
        Photo {index + 1}
      </span>
      <span className="max-w-[80%] text-xs">{slot.alt}</span>
    </div>
  );
}
