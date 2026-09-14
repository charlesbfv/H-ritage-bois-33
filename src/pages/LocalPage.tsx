import { Navigate, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Button from '../components/Button';
import BeforeAfter from '../components/BeforeAfter';
import { localPages } from '../content/localPages';
import { homePairs } from '../content/images';
import { prestations } from '../content/prestations';
import { CheckIcon, MapPinIcon, PhoneIcon } from '../components/icons';

interface Props {
  slug: string;
}

export default function LocalPage({ slug }: Props) {
  const content = localPages.find((p) => p.slug === slug);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  const otherPages = localPages.filter((p) => p.slug !== slug);
  const pair = homePairs[localPages.findIndex((p) => p.slug === slug) % homePairs.length];

  return (
    <div>
      <Seo title={content.titleTag} description={content.metaDescription} />

      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 font-mont text-xs font-semibold uppercase tracking-wide text-forest">
            <MapPinIcon className="h-3.5 w-3.5" />
            {content.ville}
          </span>
          <h1 className="mt-5 text-4xl font-semibold md:text-5xl">{content.h1}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            {content.intro}
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

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-5 text-sm leading-relaxed text-ink/80">
          {content.contexte.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-1">
          {content.points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl bg-forest/5 p-4 text-sm text-ink/80">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {pair && (
        <section className="bg-forest/5 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center text-2xl font-semibold">Avant / après</h2>
            <div className="mt-8">
              <BeforeAfter pair={pair} />
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-semibold">Nos prestations</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {prestations.map((p) => (
            <div key={p.title} className="rounded-2xl border border-stone/15 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-wood">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/prestations" variant="secondary">
            Voir le détail des prestations
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 text-center">
        <p className="text-sm text-stone">
          Nous intervenons aussi à{' '}
          {otherPages.map((p, i) => (
            <span key={p.slug}>
              <Link to={`/nettoyage-terrasse-bois-${p.slug}`} className="text-forest hover:underline">
                {p.ville}
              </Link>
              {i < otherPages.length - 1 ? ' et ' : ''}
            </span>
          ))}
          .
        </p>
      </section>
    </div>
  );
}
