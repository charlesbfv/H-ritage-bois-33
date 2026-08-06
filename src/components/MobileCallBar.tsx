import { PhoneIcon } from './icons';

export default function MobileCallBar() {
  return (
    <a
      href="tel:0767160794"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-forest py-3.5 font-mont text-sm font-semibold text-beige shadow-[0_-4px_12px_rgba(0,0,0,0.1)] md:hidden"
    >
      <PhoneIcon className="h-4 w-4" />
      Appeler maintenant — 07 67 16 07 94
    </a>
  );
}
