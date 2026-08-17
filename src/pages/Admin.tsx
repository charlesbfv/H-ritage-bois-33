import { useState } from 'react';
import { StarIcon } from '../components/icons';
import Seo from '../components/Seo';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: number;
}

interface DevisRequest {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  prestation: string;
  message: string;
  createdAt: number;
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Admin() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [checking, setChecking] = useState(false);

  const [tab, setTab] = useState<'devis' | 'avis'>('devis');
  const [devisList, setDevisList] = useState<DevisRequest[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  async function loadData(pwd: string) {
    setLoadingData(true);
    const headers = { 'x-admin-password': pwd };
    const [devisRes, reviewsRes] = await Promise.all([
      fetch('/api/devis', { headers }),
      fetch('/api/reviews', { headers }),
    ]);
    if (devisRes.ok) setDevisList(await devisRes.json());
    if (reviewsRes.ok) setReviews(await reviewsRes.json());
    setLoadingData(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    setLoginError(false);
    try {
      const res = await fetch('/api/devis', { headers: { 'x-admin-password': password } });
      if (!res.ok) {
        setLoginError(true);
        return;
      }
      setAuthed(true);
      await loadData(password);
    } catch {
      setLoginError(true);
    } finally {
      setChecking(false);
    }
  }

  async function deleteDevis(id: string) {
    if (!confirm('Supprimer cette demande de devis ?')) return;
    await fetch(`/api/devis?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': password },
    });
    setDevisList((prev) => prev.filter((d) => d.id !== id));
  }

  async function deleteReview(id: string) {
    if (!confirm('Supprimer cet avis ?')) return;
    await fetch(`/api/reviews?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': password },
    });
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col justify-center px-5 py-16">
        <Seo title="Administration | Héritage Bois 33" description="Espace privé." noindex />
        <h1 className="text-2xl font-semibold text-wood">Espace administration</h1>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            className="w-full rounded-lg border border-stone/25 bg-beige/40 px-4 py-2.5 text-sm outline-none focus:border-forest"
          />
          <button
            type="submit"
            disabled={checking}
            className="w-full rounded-full bg-gold px-6 py-2.5 font-mont text-sm font-semibold text-white transition-colors hover:bg-gold-dark disabled:opacity-60"
          >
            {checking ? 'Vérification...' : 'Se connecter'}
          </button>
          {loginError && (
            <p className="text-sm text-red-700">Mot de passe incorrect.</p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <Seo title="Administration | Héritage Bois 33" description="Espace privé." noindex />
      <h1 className="text-3xl font-semibold text-wood">Espace administration</h1>

      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => setTab('devis')}
          className={`rounded-full px-4 py-2 font-mont text-sm font-semibold ${
            tab === 'devis' ? 'bg-wood text-beige' : 'bg-white text-wood border border-stone/25'
          }`}
        >
          Demandes de devis ({devisList.length})
        </button>
        <button
          type="button"
          onClick={() => setTab('avis')}
          className={`rounded-full px-4 py-2 font-mont text-sm font-semibold ${
            tab === 'avis' ? 'bg-wood text-beige' : 'bg-white text-wood border border-stone/25'
          }`}
        >
          Avis clients ({reviews.length})
        </button>
      </div>

      {loadingData && <p className="mt-6 text-sm text-stone">Chargement...</p>}

      {!loadingData && tab === 'devis' && (
        <div className="mt-6 space-y-4">
          {devisList.length === 0 && (
            <p className="text-sm text-ink/70">Aucune demande de devis pour le moment.</p>
          )}
          {devisList.map((d) => (
            <div key={d.id} className="rounded-2xl border border-stone/15 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-mont text-sm font-semibold text-wood">
                    {d.prenom} {d.nom}
                  </p>
                  <p className="text-xs text-stone">{formatDate(d.createdAt)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => deleteDevis(d.id)}
                  className="text-xs font-semibold text-red-700 hover:underline"
                >
                  Supprimer
                </button>
              </div>
              <div className="mt-3 grid gap-1 text-sm text-ink/80">
                <p><strong className="text-ink">Email :</strong> <a href={`mailto:${d.email}`} className="text-forest hover:underline">{d.email}</a></p>
                <p><strong className="text-ink">Téléphone :</strong> <a href={`tel:${d.telephone}`} className="text-forest hover:underline">{d.telephone}</a></p>
                <p><strong className="text-ink">Prestation :</strong> {d.prestation}</p>
                {d.message && <p className="mt-2 rounded-lg bg-beige/60 p-3">{d.message}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loadingData && tab === 'avis' && (
        <div className="mt-6 space-y-4">
          {reviews.length === 0 && (
            <p className="text-sm text-ink/70">Aucun avis pour le moment.</p>
          )}
          {reviews.map((r) => (
            <div key={r.id} className="rounded-2xl border border-stone/15 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-mont text-sm font-semibold text-wood">{r.name}</p>
                  <p className="text-xs text-stone">{formatDate(r.createdAt)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => deleteReview(r.id)}
                  className="text-xs font-semibold text-red-700 hover:underline"
                >
                  Supprimer
                </button>
              </div>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <StarIcon
                    key={n}
                    className={`h-4 w-4 ${n <= r.rating ? 'fill-gold text-gold' : 'text-stone/40'}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
