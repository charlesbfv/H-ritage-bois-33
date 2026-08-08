import { Redis } from '@upstash/redis';

export const redis = Redis.fromEnv();

export function checkAdminPassword(providedPassword: string | string[] | undefined): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return typeof providedPassword === 'string' && providedPassword === expected;
}
