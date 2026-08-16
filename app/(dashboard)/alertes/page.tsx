'use client';

import { Topbar } from '@/components/layout/topbar';
import { AlerteCard } from '@/components/alertes/alerte-card';
import { useAlertesTempsReel } from '@/hooks/use-alertes-temps-reel';
import type { Alerte } from '@/types';

// TODO: charger la liste initiale via `await alertesApi.liste(token)` dans un
// server component parent, puis passer le résultat en prop ici pour
// hydrater useAlertesTempsReel (le hook ne gère que le flux temps réel).
const ALERTES_DEMO: Alerte[] = [
  {
    id: 'a1',
    scoreId: null,
    conducteurNom: 'Aïcha Njoya',
    type: 'URGENCE',
    statut: 'NOUVELLE',
    message: null,
    latitude: 4.05,
    longitude: 9.7,
    creeLe: new Date().toISOString(),
  },
  {
    id: 'a2',
    scoreId: 's2',
    conducteurNom: 'Paul Etoundi',
    type: 'EXCES_VITESSE',
    statut: 'EN_COURS',
    message: null,
    latitude: null,
    longitude: null,
    creeLe: new Date(Date.now() - 3600_000).toISOString(),
  },
];

export default function AlertesPage() {
  const alertes = useAlertesTempsReel(ALERTES_DEMO);

  return (
    <>
      <Topbar titre="Alertes" />
      <div className="space-y-3 p-6">
        {alertes.map((alerte) => (
          <AlerteCard key={alerte.id} alerte={alerte} />
        ))}
      </div>
    </>
  );
}
