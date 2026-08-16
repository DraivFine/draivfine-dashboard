// Gestion minimale du JWT côté client.
// En dev, le token vit dans un cookie non-httpOnly pour rester simple ici ;
// en prod, fais poser ce cookie par une route handler Next (httpOnly + secure)
// qui relaie l'appel /auth/login du backend, pour que le JS ne touche jamais
// le token directement.

const TOKEN_COOKIE = 'motosafe_token';

export function getToken(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(^| )${TOKEN_COOKIE}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export function setToken(token: string, maxAgeSeconds = 60 * 60 * 8) {
  if (typeof document === 'undefined') return;
  document.cookie = `${TOKEN_COOKIE}=${encodeURIComponent(token)}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
}

export function clearToken() {
  if (typeof document === 'undefined') return;
  document.cookie = `${TOKEN_COOKIE}=; path=/; max-age=0`;
}
