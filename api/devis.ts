import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getRedis, checkAdminPassword } from './_lib/redis.js';

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

const KEY = 'devis';
const MAX_LEN = 2000;

function isNonEmptyString(v: unknown, max = 200): v is string {
  return typeof v === 'string' && v.trim().length > 0 && v.length <= max;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let redis;
  try {
    redis = getRedis();
  } catch (err) {
    console.error('[api/devis] Redis config error:', err);
    return res.status(500).json({ error: 'Base de données non configurée.' });
  }

  try {
    if (req.method === 'POST') {
      const { prenom, nom, email, telephone, prestation, message } = req.body ?? {};

      if (
        !isNonEmptyString(prenom) ||
        !isNonEmptyString(nom) ||
        !isNonEmptyString(email) ||
        !isNonEmptyString(telephone, 30) ||
        !isNonEmptyString(prestation, 200) ||
        typeof message !== 'string' || message.length > MAX_LEN
      ) {
        return res.status(400).json({ error: 'Champs invalides.' });
      }

      const entry: DevisRequest = {
        id: crypto.randomUUID(),
        prenom: prenom.trim(),
        nom: nom.trim(),
        email: email.trim(),
        telephone: telephone.trim(),
        prestation: prestation.trim(),
        message: message.trim().slice(0, MAX_LEN),
        createdAt: Date.now(),
      };

      const requests = (await redis.get<DevisRequest[]>(KEY)) ?? [];
      requests.push(entry);
      await redis.set(KEY, requests);

      return res.status(201).json({ ok: true });
    }

    if (req.method === 'GET' || req.method === 'DELETE') {
      if (!checkAdminPassword(req.headers['x-admin-password'])) {
        return res.status(401).json({ error: 'Non autorisé.' });
      }

      if (req.method === 'GET') {
        const requests = (await redis.get<DevisRequest[]>(KEY)) ?? [];
        requests.sort((a, b) => b.createdAt - a.createdAt);
        return res.status(200).json(requests);
      }

      const { id } = req.query;
      const requests = (await redis.get<DevisRequest[]>(KEY)) ?? [];
      const filtered = requests.filter((r) => r.id !== id);
      await redis.set(KEY, filtered);
      return res.status(200).json({ ok: true });
    }

    res.setHeader('Allow', 'GET, POST, DELETE');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  } catch (err) {
    console.error('[api/devis] Unexpected error:', err);
    return res.status(500).json({ error: 'Erreur serveur.' });
  }
}
