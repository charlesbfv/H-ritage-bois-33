import Seo from '../components/Seo';
import Button from '../components/Button';
import BeforeAfter from '../components/BeforeAfter';
import { Link } from 'react-router-dom';
import { homePairs } from '../content/images';
import { localPages } from '../content/localPages';
import { CheckIcon, MapPinIcon, PhoneIcon } from '../components/icons';

const secteurs = [
  {
    nom: 'Bordeaux Métropole',
    communes: 'Bordeaux, Mérignac, Pessac, Talence, Bègles, Le Bouscat, Villenave-d\'Ornon, Gradignan, Eysines...',
  },
  {
    nom: "Bassin d'Arcachon",
    communes: 'Arcachon, La Teste-de-Buch, Gujan-Mestras, Le Teich, Biganos, Audenge, Lanton, Andernos-les-Bains, Lège-Cap-Ferret...',
  },
  {
    nom: 'Médoc',
    communes: 'Le Taillan-Médoc, Blanquefort, Le Pian-Médoc, Castelnau-de-Médoc, Lacanau, Soulac-sur-Mer...',
  },
  {
    nom: 'Sud Gironde & Entre-deux-Mers',
    communes: 'Langon, La Réole, Créon, Cadillac, Podensac, Rions...',
  },
  {
    nom: 'Libournais',
    communes: 'Libourne, Saint-Émilion, Coutras, Castillon-la-Bataille...',
  },
];

export default function ZonesGironde() {
  return (
    <div>
      <Seo
        title="Nettoyage de terrasse en bois en Gironde | Héritage Bois 33"
        description="Héritage Bois 33 intervient dans toute la Gironde pour le nettoyage et l'entretien de terrasses en bois : Bordeaux Métropole, Bassin d'Arcachon, Médoc, Entre-deux-Mers, Libournais. Devis gratuit."
      />

      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 font-mont text-xs font-semibold uppercase tracking-wide text-forest">
            <MapPinIcon className="h-3.5 w-3.5" />
            Toute la Gironde
          </span>
          <h1 className="mt-5 text-4xl font-semibold md:text-5xl">
            Nettoyage de terrasse en bois dans toute la Gironde
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            Héritage Bois 33 se déplace dans l'ensemble du département pour
            nettoyer et entretenir vos terrasses en bois, de Bordeaux Métropole
            au Bassin d'Arcachon, en passant par le Médoc, l'Entre-deux-Mers et
            le Libournais.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary">
              Demander un devis gratuit
            </Button>
            <Button href="tel:0767160794" variant="secondary">
              <PhoneIcon className="h-4 w-4" /> 07 67 16 07 94
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-2xl font-semibold text-wood">Nos secteurs d'intervention</h2>
        <div className="mt-10 space-y-6">
          {secteurs.map((s) => (
            <div key={s.nom} className="rounded-2xl border border-stone/15 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-wood">
                <MapPinIcon className="h-4 w-4 text-forest" />
                {s.nom}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.communes}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/70">
          Vous ne voyez pas votre commune dans la liste ? Contactez-nous : nous
          intervenons dans bien d'autres communes de Gironde selon les
          disponibilités.
        </p>
      </section>

      <section className="bg-forest/5 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-semibold">Zoom sur nos secteurs les plus demandés</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localPages.map((p) => (
              <Link
                key={p.slug}
                to={`/nettoyage-terrasse-bois-${p.slug}`}
                className="group rounded-2xl border border-stone/15 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-wood group-hover:text-forest">
                  {p.ville}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {homePairs[0] && (
        <section className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-center text-2xl font-semibold">Avant / après</h2>
          <div className="mt-8">
            <BeforeAfter pair={homePairs[0]} />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-5 pb-16 text-center">
        <ul className="mx-auto inline-flex flex-col gap-2 text-left text-sm text-ink/80">
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-forest" /> Devis gratuit et sans engagement
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-forest" /> Intervention dans toute la Gironde
          </li>
        </ul>
        <div className="mt-8">
          <Button to="/contact" variant="primary">
            Demander mon devis
          </Button>
        </div>
      </section>
    </div>
  );
}
