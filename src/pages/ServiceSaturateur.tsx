import Seo from '../components/Seo';
import Button from '../components/Button';
import BeforeAfter from '../components/BeforeAfter';
import { homePairs } from '../content/images';
import { CheckIcon, PhoneIcon, ShieldIcon, SparkleIcon } from '../components/icons';

export default function ServiceSaturateur() {
  return (
    <div>
      <Seo
        title="Application de dégriseur et saturateur sur terrasse bois | Héritage Bois 33"
        description="Redonnez à votre terrasse en bois son aspect d'origine grâce à l'application d'un dégriseur. Traitement complet en Gironde et Bassin d'Arcachon. Devis gratuit."
      />

      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Dégriseur pour terrasse en bois
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            Une terrasse grisée n'est pas une terrasse abîmée. Notre traitement au
            dégriseur, appliqué après un nettoyage en profondeur, lui redonne son
            aspect d'origine.
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
        <h2 className="text-2xl font-semibold text-wood">
          Pourquoi une terrasse en bois grise avec le temps ?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/80">
          Exposé aux UV, à la pluie et aux variations d'humidité, le bois extérieur
          développe naturellement une patine grise en surface — un phénomène
          d'oxydation qui touche toutes les essences, même les bois exotiques
          réputés résistants comme l'ipé ou le teck. Ce grisaillement est purement
          esthétique : il n'altère pas la solidité de la terrasse, mais il en
          ternit fortement l'apparence.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-wood">
          Comment fonctionne le dégriseur ?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/80">
          Le dégriseur est un produit qui agit en profondeur sur les fibres du
          bois pour dissoudre la couche grisée en surface et faire ressortir la
          couleur naturelle d'origine. Contrairement à un simple nettoyage, il
          traite la cause du grisaillement et non seulement les salissures
          visibles.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-wood">
          Notre méthode en 3 étapes
        </h2>
        <ul className="mt-4 space-y-3">
          {[
            'Nettoyage en profondeur de la terrasse avec des produits adaptés pour retirer poussières, mousses et taches.',
            "Application du dégriseur, laissé à agir selon le temps nécessaire pour dissoudre la couche grisée.",
            'Rinçage soigné pour révéler la teinte naturelle du bois et préparer la terrasse à un usage optimal.',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink/80">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 font-mont text-xs font-bold text-gold-dark">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-forest/5 p-6">
            <ShieldIcon className="h-6 w-6 text-forest" />
            <h3 className="mt-3 text-base font-semibold text-wood">Résultat durable</h3>
            <p className="mt-2 text-sm text-ink/75">
              Un aspect raviver qui dure, à condition d'un entretien régulier
              adapté à l'exposition de votre terrasse.
            </p>
          </div>
          <div className="rounded-2xl bg-forest/5 p-6">
            <SparkleIcon className="h-6 w-6 text-forest" />
            <h3 className="mt-3 text-base font-semibold text-wood">Toutes essences</h3>
            <p className="mt-2 text-sm text-ink/75">
              Pin traité, bois exotique, bois composite : nous adaptons le produit
              et le dosage à votre type de terrasse.
            </p>
          </div>
        </div>
      </section>

      {homePairs[0] && (
        <section className="bg-forest/5 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center text-2xl font-semibold">Avant / après dégriseur</h2>
            <div className="mt-8">
              <BeforeAfter pair={homePairs[0]} />
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="mx-auto max-w-xl text-sm text-ink/75">
          Le prix de cette prestation évolue selon le niveau de propreté initial du
          bois et son essence. Chaque devis est établi sur mesure.
        </p>
        <ul className="mx-auto mt-6 inline-flex flex-col gap-2 text-left text-sm text-ink/80">
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-forest" /> Intervention en Gironde et sur le Bassin d'Arcachon
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-forest" /> Devis gratuit et sans engagement
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
