import { Redis } from '@upstash/redis';

function resolveCredentials(): { url: string; token: string } {
  const env = process.env;

  const directPairs: [string, string][] = [
    ['UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN'],
    ['KV_REST_API_URL', 'KV_REST_API_TOKEN'],
  ];

  for (const [urlKey, tokenKey] of directPairs) {
    if (env[urlKey] && env[tokenKey]) {
      return { url: env[urlKey]!, token: env[tokenKey]! };
    }
  }

  // Vercel Marketplace integrations sometimes prefix these with the store
  // name, e.g. "MY_STORE_KV_REST_API_URL" / "MY_STORE_KV_REST_API_TOKEN".
  // Fall back to scanning for any matching pair of env var names.
  const urlKey = Object.keys(env).find(
    (k) => k.endsWith('_REDIS_REST_URL') || k.endsWith('_KV_REST_API_URL'),
  );
  if (urlKey) {
    const tokenKey = urlKey.replace(/URL$/, 'TOKEN');
    if (env[tokenKey]) {
      return { url: env[urlKey]!, token: env[tokenKey]! };
    }
  }

  throw new Error(
    'Identifiants Redis introuvables. Vérifie que la base de données est bien ' +
      'connectée au projet dans Vercel (Storage > ta base > Connect Project) ' +
      "et que l'environnement Production a bien reçu les variables d'environnement.",
  );
}

let cachedRedis: Redis | null = null;

export function getRedis(): Redis {
  if (!cachedRedis) {
    const { url, token } = resolveCredentials();
    cachedRedis = new Redis({ url, token });
  }
  return cachedRedis;
}

export function checkAdminPassword(providedPassword: string | string[] | undefined): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return typeof providedPassword === 'string' && providedPassword === expected;
}
