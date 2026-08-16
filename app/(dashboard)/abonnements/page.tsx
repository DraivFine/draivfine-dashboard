import { Topbar } from '@/components/layout/topbar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Abonnement } from '@/types';

// TODO: remplacer par `await abonnementsApi.liste(token)`
const ABONNEMENTS_DEMO: Abonnement[] = [
  { id: 'ab1', conducteurId: '1', conducteurNom: 'Jean Mbarga', plan: 'PRO', statut: 'ACTIF', renouvelleLe: new Date(Date.now() + 15 * 86400_000).toISOString() },
  { id: 'ab2', conducteurId: '2', conducteurNom: 'Aïcha Njoya', plan: 'BASIC', statut: 'EXPIRE', renouvelleLe: new Date(Date.now() - 5 * 86400_000).toISOString() },
];

const TON_STATUT = { ACTIF: 'vert', EXPIRE: 'rouge', SUSPENDU: 'ambre', ANNULE: 'neutre' } as const;

export default function AbonnementsPage() {
  return (
    <>
      <Topbar titre="Abonnements" />
      <div className="grid grid-cols-2 gap-4 p-6 lg:grid-cols-3">
        {ABONNEMENTS_DEMO.map((ab) => (
          <Card key={ab.id}>
            <p className="font-medium text-white">{ab.conducteurNom}</p>
            <p className="mt-1 text-sm text-white/40">Plan {ab.plan.toLowerCase()}</p>
            <div className="mt-3 flex items-center justify-between">
              <Badge ton={TON_STATUT[ab.statut]}>{ab.statut.toLowerCase()}</Badge>
              <span className="text-xs text-white/30">
                {new Date(ab.renouvelleLe).toLocaleDateString('fr-FR')}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
