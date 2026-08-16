import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

// Space Grotesk pour les titres (identité distincte, légèrement technique —
// cohérente avec un produit de télémétrie/capteurs), Inter pour le corps et
// les données tabulaires où la lisibilité chiffrée prime.
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'MotoSafe — Dashboard',
  description: 'Suivi comportemental et sécurité des conducteurs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-graphite-950 font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
