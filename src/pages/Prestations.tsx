import Button from '../components/Button';
import Seo from '../components/Seo';
import { prestations } from '../content/prestations';
import { CheckIcon, DropletIcon, ShieldIcon, SlidersIcon, SparkleIcon } from '../components/icons';

const iconFor = { droplet: DropletIcon, sparkle: SparkleIcon, shield: ShieldIcon };

export default function Prestations() {
  return (
    <div>
      <Seo
        title="Prestations de nettoyage et entretien de terrasse bois | Héritage Bois 33"
        description="Nettoyage simple, nettoyage en profondeur, application de dégriseur : découvrez nos 3 formules d'entretien de terrasse en bois adaptées à votre essence de bois, en Gironde et Bassin d'Arcachon."
      />
      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">Nos prestations</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            Trois formules de nettoyage, pensées selon le type de bois et le
            niveau de propreté de votre terrasse, pour un résultat toujours
            adapté.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="space-y-8">
          {prestations.map((p, i) => {
            const Icon = iconFor[p.icon];
            return (
              <div
                key={p.title}
                className="grid gap-8 rounded-2xl border border-stone/15 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr] md:items-start"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-wood/10 text-wood">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-mont text-xs font-semibold uppercase tracking-wide text-gold">
                    Étape {i + 1}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-wood">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{p.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tarification */}
        <div className="mt-12 rounded-2xl bg-forest/5 p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/15 text-forest">
              <SlidersIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-wood">Un devis toujours personnalisé</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
                Le prix de la prestation évolue selon deux critères principaux :
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-forest" />
                  Le niveau de propreté initial du bois
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-forest" />
                  L'essence du bois utilisée pour votre terrasse
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink/70">
                Chaque devis est établi sur mesure, après évaluation de votre
                terrasse.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button to="/contact" variant="primary">
            Demander mon devis personnalisé
          </Button>
        </div>
      </section>
    </div>
  );
}
