import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const TOKEN_COOKIE = 'motosafe_token';

// Toutes les routes sauf /login et /signalement passent par ici.
// /signalement reste public (formulaire témoin, sans JWT) — cohérent avec
// le fait que le backend expose cette route sans authentification.
export const config = {
  matcher: ['/((?!login|signalement|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_COOKIE)?.value;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
