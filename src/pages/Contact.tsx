import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Seo from '../components/Seo';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, SlidersIcon } from '../components/icons';

const prestationOptions = [
  'Nettoyage simple à eau + balayage',
  'Nettoyage avec produits + balayage',
  'Nettoyage + produits + balayage + dégriseur',
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    prestation: prestationOptions[0],
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('request failed');
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <Seo
        title="Devis nettoyage terrasse bois gratuit | Héritage Bois 33"
        description="Demandez votre devis gratuit de nettoyage ou entretien de terrasse en bois en Gironde et Bassin d'Arcachon. Réponse sous 24 à 48h. Contact : 07 67 16 07 94."
      />
      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">Demander un devis</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            Décrivez-nous votre projet, nous revenons vers vous rapidement
            avec un devis personnalisé.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Formulaire */}
          <div className="rounded-2xl border border-stone/15 bg-white p-8 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <ClockIcon className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-wood">Merci pour votre demande</h2>
                <p className="mt-2 max-w-sm text-sm text-ink/75">
                  Nous avons bien reçu votre message et reviendrons vers vous
                  dans les meilleurs délais avec un devis adapté.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
                    Prénom
                  </label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
                    Nom
                  </label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
                    Prestation souhaitée
                  </label>
                  <select
                    name="prestation"
                    value={form.prestation}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
                  >
                    {prestationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre terrasse, son état, sa surface approximative..."
                    className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-full bg-gold px-6 py-3 font-mont text-sm font-semibold text-white transition-all duration-200 hover:bg-gold-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 sm:w-auto"
                  >
                    {sending ? 'Envoi...' : 'Envoyer ma demande de devis'}
                  </button>
                  {error && (
                    <p className="mt-3 text-sm text-red-700">
                      Une erreur est survenue, merci de réessayer ou de nous appeler directement.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Coordonnées + mentions pratiques */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone/15 bg-white p-7 shadow-sm">
              <h2 className="text-lg font-semibold text-wood">Nos coordonnées</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-forest" />
                  <a href="tel:0767160794" className="hover:text-forest">07 67 16 07 94</a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="h-4 w-4 shrink-0 text-forest" />
                  <a href="mailto:heritagebois33@gmail.com" className="hover:text-forest">
                    heritagebois33@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  3 Allée de Sandillan, Le Taillan-Médoc, 33320
                </li>
              </ul>
              <p className="mt-4 text-xs text-stone">
                <Link to="/mentions-legales" className="hover:text-forest">
                  Mentions légales
                </Link>
              </p>
            </div>

            <div className="rounded-2xl bg-forest/5 p-7">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-wood">
                <ClockIcon className="h-5 w-5 text-forest" />
                Mentions pratiques
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li>Réponse à votre demande sous 24 à 48h ouvrées.</li>
                <li className="flex items-start gap-2">
                  <SlidersIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  Chaque devis peut être adapté selon vos besoins et les
                  spécificités de votre terrasse.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="bg-white/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-semibold">Avis clients</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink/75">
            La confiance de nos clients, notre meilleure recommandation.
          </p>
          <div className="mt-10">
            <Reviews />
          </div>
        </div>
      </section>
    </div>
  );
}
