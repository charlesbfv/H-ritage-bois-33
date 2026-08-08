import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from './icons';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-wood text-beige/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Héritage Bois 33" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-semibold text-beige">
              Héritage Bois 33
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige/70">
            Nettoyage et entretien de terrasses en bois. Respecter le bois, c'est
            prolonger sa durée de vie.
          </p>
        </div>

        <div>
          <h3 className="font-mont text-sm font-semibold uppercase tracking-wide text-gold">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-beige/80">
            <li><Link to="/" className="hover:text-gold">Accueil</Link></li>
            <li><Link to="/prestations" className="hover:text-gold">Prestations</Link></li>
            <li><Link to="/a-propos" className="hover:text-gold">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact / Devis</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mont text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-beige/80">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:0767160794" className="hover:text-gold">07 67 16 07 94</a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:heritagebois33@gmail.com" className="hover:text-gold">
                heritagebois33@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <span>3 Allée de Sandillan, Le Taillan-Médoc, 33320</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige/15 px-5 py-5 text-center text-xs text-beige/60">
        <p>
          © {new Date().getFullYear()} Héritage Bois 33 — Tous droits réservés —{' '}
          <Link to="/mentions-legales" className="hover:text-gold">
            Mentions légales
          </Link>
        </p>
        <p className="mt-1">Zone d'intervention : Bordeaux et alentours, Bassin d'Arcachon et alentours</p>
      </div>
    </footer>
  );
}
