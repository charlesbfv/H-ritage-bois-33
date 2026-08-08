import Button from '../components/Button';
import BeforeAfter from '../components/BeforeAfter';
import { differenceImage, heroImage, homePairs } from '../content/images';
import { prestations } from '../content/prestations';
import {
  CheckIcon,
  DropletIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
} from '../components/icons';

const iconFor = { droplet: DropletIcon, sparkle: SparkleIcon, shield: ShieldIcon };

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/85 via-wood-dark/65 to-wood-dark/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-beige/15 px-4 py-1.5 font-mont text-xs font-semibold uppercase tracking-wide text-beige backdrop-blur-sm">
              Bordeaux &amp; Bassin d'Arcachon
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-semibold text-beige md:text-5xl">
              Le nettoyage de terrasses en bois, confié à des experts
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-beige/90">
              Héritage Bois 33 redonne à vos terrasses en bois leur éclat
              d'origine grâce à un savoir-faire précis et des méthodes
              adaptées à chaque essence de bois. Un service professionnel,
              pensé pour durer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">
                Demander un devis gratuit
              </Button>
              <Button
                href="tel:0767160794"
                variant="secondary"
                className="!border-beige !text-beige hover:!bg-beige hover:!text-wood"
              >
                <PhoneIcon className="h-4 w-4" /> Appeler maintenant
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-beige/90">
              <MapPinIcon className="h-4 w-4 text-gold" />
              Intervention à Bordeaux et ses alentours, Bassin d'Arcachon et ses alentours
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="border-y border-stone/15 bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
          {[
            {
              icon: ShieldIcon,
              title: 'Expertise du bois',
              text: "Une méthode adaptée à chaque essence pour un résultat respectueux et durable.",
            },
            {
              icon: CheckIcon,
              title: 'Professionnalisme',
              text: 'Un service soigné, ponctuel et transparent, du premier contact au résultat final.',
            },
            {
              icon: SparkleIcon,
              title: 'Qualité du service',
              text: 'Des terrasses qui retrouvent leur éclat naturel, sans agresser le bois.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aperçu prestations */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Nos prestations</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/75">
            Trois niveaux de nettoyage adaptés à l'état et à l'essence de votre
            terrasse.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {prestations.map((p) => {
            const Icon = iconFor[p.icon];
            return (
              <div key={p.title} className="rounded-2xl border border-stone/15 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wood/10 text-wood">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-wood">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button to="/prestations" variant="secondary">
            Voir le détail des prestations
          </Button>
        </div>
      </section>

      {/* Avant / après */}
      <section className="bg-forest/5 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-semibold">Avant / après</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink/75">
            La différence Héritage Bois 33, visible en un coup d'œil.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {homePairs.map((pair, i) => (
              <BeforeAfter key={i} pair={pair} />
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl shadow-md">
            <img
              src={differenceImage}
              alt="Terrasse en bois : différence de nettoyage visible sur les lattes"
              className="max-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl bg-wood px-8 py-14 text-center text-beige">
          <h2 className="text-3xl font-semibold text-beige">
            Offrez à votre terrasse le soin qu'elle mérite
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-beige/80">
            Chaque terrasse mérite un entretien adapté. Demandez votre devis
            personnalisé, sans engagement.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary">
              Demander un devis
            </Button>
            <Button href="tel:0767160794" variant="secondary" className="!border-beige !text-beige hover:!bg-beige hover:!text-wood">
              <PhoneIcon className="h-4 w-4" /> 07 67 16 07 94
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
