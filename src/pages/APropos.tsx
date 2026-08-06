import Button from '../components/Button';
import ImageSlot from '../components/ImageSlot';
import { aboutImages } from '../content/images';
import { LeafIcon, ShieldIcon, SparkleIcon } from '../components/icons';

export default function APropos() {
  return (
    <div>
      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">Héritage Bois 33</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/80">
            Héritage Bois 33 est une entreprise spécialisée dans le nettoyage
            et l'entretien des terrasses en bois pour les particuliers et les
            professionnels. Notre approche : redonner au bois sa beauté
            naturelle, avec des méthodes respectueuses et adaptées à chaque
            essence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: LeafIcon,
              title: 'Respect du bois',
              text: "Chaque essence est traitée avec la méthode qui lui convient, pour préserver sa qualité dans le temps.",
            },
            {
              icon: ShieldIcon,
              title: 'Approche rassurante',
              text: 'Une communication claire et un accompagnement transparent, du devis à la fin de la prestation.',
            },
            {
              icon: SparkleIcon,
              title: 'Satisfaction client',
              text: 'Notre priorité : des clients pleinement satisfaits du résultat, sur le long terme.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest/5 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-semibold">En images</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink/75">
            Un aperçu de notre savoir-faire sur le terrain.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {aboutImages.map((slot, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <ImageSlot slot={slot} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="font-display text-2xl italic text-wood">
          « Respecter le bois, c'est prolonger sa durée de vie. »
        </p>
        <p className="mt-3 text-sm text-ink/70">
          Chaque terrasse mérite un entretien adapté.
        </p>
        <div className="mt-8">
          <Button to="/contact" variant="primary">
            Discuter de mon projet
          </Button>
        </div>
      </section>
    </div>
  );
}
