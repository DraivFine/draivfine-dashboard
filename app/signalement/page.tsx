'use client';

import { useState, type FormEvent } from 'react';
import { apiClient } from '@/lib/api/client';
import { Button } from '@/components/ui/button';

// Formulaire public, sans authentification — le backend expose
// POST /signalements sans JWT et applique son propre rate-limit.
export default function SignalementPage() {
  const [envoye, setEnvoye] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnvoiEnCours(true);
    const data = new FormData(e.currentTarget);
    try {
      await apiClient.post('/signalements', {
        description: data.get('description'),
        lieu: data.get('lieu'),
        nomTemoin: data.get('nomTemoin') || undefined,
        telephoneTemoin: data.get('telephoneTemoin') || undefined,
      });
      setEnvoye(true);
    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-graphite-950 px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          <span className="font-display text-lg font-semibold text-white">MotoSafe</span>
        </div>

        {envoye ? (
          <div className="rounded-xl border border-brand-500/30 bg-brand-900/40 p-6 text-sm text-brand-200">
            Signalement envoyé. Merci d&apos;avoir pris le temps de le faire.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-graphite-700 bg-graphite-800 p-6"
          >
            <h1 className="font-display text-base font-medium text-white">
              Signaler un incident
            </h1>

            <div>
              <label htmlFor="description" className="mb-1 block text-sm text-white/60">
                Ce qui s&apos;est passé
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full rounded-lg border border-graphite-700 bg-graphite-900 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label htmlFor="lieu" className="mb-1 block text-sm text-white/60">
                Lieu approximatif
              </label>
              <input
                id="lieu"
                name="lieu"
                required
                className="w-full rounded-lg border border-graphite-700 bg-graphite-900 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
              />
            </div>

            <p className="text-xs text-white/30">
              Les champs suivants sont facultatifs — vous pouvez rester anonyme.
            </p>

            <div>
              <label htmlFor="nomTemoin" className="mb-1 block text-sm text-white/60">
                Votre nom
              </label>
              <input
                id="nomTemoin"
                name="nomTemoin"
                className="w-full rounded-lg border border-graphite-700 bg-graphite-900 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label htmlFor="telephoneTemoin" className="mb-1 block text-sm text-white/60">
                Votre téléphone
              </label>
              <input
                id="telephoneTemoin"
                name="telephoneTemoin"
                className="w-full rounded-lg border border-graphite-700 bg-graphite-900 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
              />
            </div>

            <Button type="submit" disabled={envoiEnCours} className="w-full">
              {envoiEnCours ? 'Envoi…' : 'Envoyer le signalement'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
