import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { LeafIcon, PhoneIcon } from './icons';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/prestations', label: 'Prestations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone/15 bg-beige/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-beige">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold text-wood">
            Héritage Bois 33
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-mont text-sm font-medium transition-colors ${
                  isActive ? 'text-forest' : 'text-ink hover:text-forest'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0767160794"
            className="flex items-center gap-2 font-mont text-sm font-semibold text-wood hover:text-forest"
          >
            <PhoneIcon className="h-4 w-4" />
            07 67 16 07 94
          </a>
          <Button to="/contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-wood transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-wood transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-wood transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-stone/15 bg-beige px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-mont text-base font-medium ${isActive ? 'text-forest' : 'text-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Button href="tel:0767160794" variant="secondary">
              <PhoneIcon className="h-4 w-4" /> Appeler maintenant
            </Button>
            <Button to="/contact" variant="primary" className="w-full">
              Demander un devis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
