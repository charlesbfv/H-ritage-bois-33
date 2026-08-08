import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getRedis, checkAdminPassword } from './_lib/redis.js';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: number;
}

const KEY = 'reviews';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let redis;
  try {
    redis = getRedis();
  } catch (err) {
    console.error('[api/reviews] Redis config error:', err);
    return res.status(500).json({ error: 'Base de données non configurée.' });
  }

  try {
    if (req.method === 'GET') {
      const reviews = (await redis.get<Review[]>(KEY)) ?? [];
      reviews.sort((a, b) => b.createdAt - a.createdAt);
      return res.status(200).json(reviews);
    }

    if (req.method === 'POST') {
      const { name, rating, comment } = req.body ?? {};

      if (
        typeof name !== 'string' || !name.trim() || name.length > 100 ||
        typeof comment !== 'string' || !comment.trim() || comment.length > 1000 ||
        typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5
      ) {
        return res.status(400).json({ error: 'Champs invalides.' });
      }

      const review: Review = {
        id: crypto.randomUUID(),
        name: name.trim().slice(0, 100),
        rating,
        comment: comment.trim().slice(0, 1000),
        createdAt: Date.now(),
      };

      const reviews = (await redis.get<Review[]>(KEY)) ?? [];
      reviews.push(review);
      await redis.set(KEY, reviews);

      return res.status(201).json(review);
    }

    if (req.method === 'DELETE') {
      if (!checkAdminPassword(req.headers['x-admin-password'])) {
        return res.status(401).json({ error: 'Non autorisé.' });
      }

      const { id } = req.query;
      const reviews = (await redis.get<Review[]>(KEY)) ?? [];
      const filtered = reviews.filter((r) => r.id !== id);
      await redis.set(KEY, filtered);

      return res.status(200).json({ ok: true });
    }

    res.setHeader('Allow', 'GET, POST, DELETE');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  } catch (err) {
    console.error('[api/reviews] Unexpected error:', err);
    return res.status(500).json({ error: 'Erreur serveur.' });
  }
}
