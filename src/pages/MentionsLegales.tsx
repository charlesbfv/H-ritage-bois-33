import { MailIcon, MapPinIcon, PhoneIcon } from '../components/icons';

export default function MentionsLegales() {
  return (
    <div>
      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">Mentions légales</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance
            dans l'économie numérique, voici les informations légales
            relatives à ce site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">Éditeur du site</h2>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
              <p><strong className="text-wood">Héritage Bois 33</strong></p>
              <p>Entreprise individuelle (micro-entreprise / auto-entrepreneur)</p>
              <p>SIREN : 100820786</p>
              <p>TVA non applicable, article 293 B du Code Général des Impôts</p>
              <p className="flex items-start gap-2 pt-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                3 Allée de Sandillan, Le Taillan-Médoc, 33320
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-forest" />
                <a href="tel:0767160794" className="hover:text-forest">07 67 16 07 94</a>
              </p>
              <p className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-forest" />
                <a href="mailto:heritagebois33@gmail.com" className="hover:text-forest">
                  heritagebois33@gmail.com
                </a>
              </p>
              <p className="pt-2">
                Directeur de la publication : le représentant légal de Héritage Bois 33.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Hébergement</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Informations d'hébergement à compléter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              L'ensemble des contenus présents sur ce site (textes, photographies,
              logos, mise en page) est la propriété exclusive de Héritage Bois 33,
              sauf mention contraire. Toute reproduction, représentation,
              modification ou diffusion, totale ou partielle, sans autorisation
              écrite préalable, est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Données personnelles</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Les informations transmises via le formulaire de contact
              (nom, prénom, email, téléphone, message) sont utilisées
              uniquement pour traiter votre demande de devis et vous
              recontacter. Elles ne sont ni cédées, ni vendues à des tiers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
              droit d'accès, de rectification, de suppression et
              d'opposition concernant vos données personnelles. Pour l'exercer,
              contactez-nous à l'adresse{' '}
              <a href="mailto:heritagebois33@gmail.com" className="text-forest hover:underline">
                heritagebois33@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Ce site n'utilise pas de cookies de suivi publicitaire ni
              d'outils de mesure d'audience tiers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Avis clients</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Les avis publiés sur ce site sont laissés librement par les
              visiteurs. Héritage Bois 33 se réserve le droit de retirer tout
              avis manifestement abusif, injurieux ou sans rapport avec la
              prestation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Droit applicable</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Le présent site est soumis au droit français. En cas de litige
              et à défaut de résolution amiable, les tribunaux français
              seront seuls compétents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
