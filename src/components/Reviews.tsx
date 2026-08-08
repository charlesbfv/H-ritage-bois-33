import { useEffect, useState } from 'react';
import { StarIcon } from './icons';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: number;
}

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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || sending) return;

    setSending(true);
    setError(false);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), rating, comment: comment.trim() }),
      });
      if (!res.ok) throw new Error('request failed');
      const created: Review = await res.json();
      setReviews((prev) => [created, ...prev]);
      setName('');
      setComment('');
      setRating(5);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      {reviews.length > 0 && (
        <div className="flex flex-wrap items-center gap-3">
          <Stars rating={Math.round(average)} />
          <span className="font-mont text-sm font-semibold text-wood">
            {average.toFixed(1)} / 5
          </span>
          <span className="text-sm text-stone">({reviews.length} avis)</span>
        </div>
      )}

      {!loading && reviews.length === 0 && (
        <p className="text-sm text-ink/70">
          Aucun avis pour le moment — soyez le premier à partager votre expérience.
        </p>
      )}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-2xl border border-stone/15 bg-white p-6 shadow-sm">
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
          disabled={sending}
          className="mt-5 rounded-full bg-gold px-6 py-2.5 font-mont text-sm font-semibold text-white transition-all duration-200 hover:bg-gold-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60"
        >
          {sending ? 'Envoi...' : 'Publier mon avis'}
        </button>
        {submitted && (
          <p className="mt-3 text-sm text-forest">Merci pour votre avis !</p>
        )}
        {error && (
          <p className="mt-3 text-sm text-red-700">
            Une erreur est survenue, merci de réessayer.
          </p>
        )}
      </form>
    </div>
  );
}
