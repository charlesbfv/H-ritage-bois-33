import { useState } from 'react';
import { StarIcon } from './icons';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const initialReviews: Review[] = [
  {
    name: 'Sophie M.',
    rating: 5,
    comment:
      "Terrasse comme neuve après le passage d'Héritage Bois 33. Travail soigné et équipe très professionnelle.",
  },
  {
    name: 'Julien D.',
    rating: 5,
    comment:
      'Devis clair, intervention rapide et résultat impeccable. Je recommande sans hésiter.',
  },
  {
    name: 'Camille R.',
    rating: 4,
    comment: 'Très satisfaite du nettoyage, le bois a retrouvé de belles couleurs.',
  },
];

function Stars({ rating, onChange }: { rating: number; onChange?: (n: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(n)}
          className={onChange ? 'cursor-pointer' : 'cursor-default'}
          aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
        >
          <StarIcon
            className={`h-5 w-5 ${n <= rating ? 'fill-gold text-gold' : 'text-stone/40'}`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setReviews([{ name: name.trim(), rating, comment: comment.trim() }, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Stars rating={Math.round(average)} />
        <span className="font-mont text-sm font-semibold text-wood">
          {average.toFixed(1)} / 5
        </span>
        <span className="text-sm text-stone">
          ({reviews.length} avis)
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-stone/15 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mont text-sm font-semibold text-wood">{r.name}</span>
              <Stars rating={r.rating} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{r.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-stone/15 bg-white p-7 shadow-sm">
        <h3 className="text-lg font-semibold text-wood">Laisser un avis</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
              Votre nom
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
              placeholder="Prénom N."
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
              Votre note
            </label>
            <Stars rating={rating} onChange={setRating} />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block font-mont text-xs font-semibold uppercase tracking-wide text-stone">
              Votre commentaire
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows={3}
              className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
              placeholder="Partagez votre expérience avec Héritage Bois 33"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 rounded-full bg-gold px-6 py-2.5 font-mont text-sm font-semibold text-white transition-all duration-200 hover:bg-gold-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          Publier mon avis
        </button>
        {submitted && (
          <p className="mt-3 text-sm text-forest">Merci pour votre avis !</p>
        )}
      </form>
    </div>
  );
}
