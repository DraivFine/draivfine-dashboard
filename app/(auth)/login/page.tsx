'use client';

import { useState, type FormEvent } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { ApiError } from '@/lib/api/client';

export default function LoginPage() {
  const { connexion } = useAuth();
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErreur(null);
    setEnvoiEnCours(true);
    try {
      await connexion(email, motDePasse);
    } catch (err) {
      setErreur(err instanceof ApiError ? err.message : 'Connexion impossible.');
    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-brand-500" />
        <span className="font-display text-lg font-semibold text-white">MotoSafe</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-graphite-700 bg-graphite-800 p-6">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-white/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-graphite-700 bg-graphite-900 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label htmlFor="mdp" className="mb-1 block text-sm text-white/60">
            Mot de passe
          </label>
          <input
            id="mdp"
            type="password"
            required
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            className="w-full rounded-lg border border-graphite-700 bg-graphite-900 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
          />
        </div>

        {erreur && <p className="text-sm text-risque-critique">{erreur}</p>}

        <Button type="submit" disabled={envoiEnCours} className="w-full">
          {envoiEnCours ? 'Connexion…' : 'Se connecter'}
        </Button>
      </form>
    </div>
  );
}
