import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';

// TODO: remplacer par des appels serveur à conducteursApi / trajetsApi / alertesApi
const KPIS = [
  { label: 'Conducteurs actifs', valeur: '128' },
  { label: 'Trajets aujourd\u2019hui', valeur: '342' },
  { label: 'Score moyen', valeur: '78 / 100' },
  { label: 'Alertes non traitées', valeur: '5' },
];

export default function VueEnsemblePage() {
  return (
    <>
      <Topbar titre="Vue d'ensemble" />
      <div className="grid grid-cols-2 gap-4 p-6 lg:grid-cols-4">
        {KPIS.map((kpi) => (
          <Card key={kpi.label}>
            <p className="text-sm text-white/50">{kpi.label}</p>
            <p className="mt-2 font-display text-2xl font-semibold text-white">{kpi.valeur}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
