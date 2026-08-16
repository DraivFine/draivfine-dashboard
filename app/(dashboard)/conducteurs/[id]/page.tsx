import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';
import { ScoreRing } from '@/components/ui/score-ring';

// TODO: remplacer par `await conducteursApi.detail(params.id, token)`
// et `await trajetsApi.liste(token, params.id)` pour l'historique.
export default function DetailConducteurPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Topbar titre="Détail conducteur" />
      <div className="grid grid-cols-3 gap-4 p-6">
        <Card className="col-span-2">
          <p className="text-sm text-white/50">Conducteur #{params.id}</p>
          <p className="mt-1 font-display text-xl font-semibold text-white">Jean Mbarga</p>
          <p className="mt-1 text-sm text-white/40">+237 6 90 12 34 56</p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <ScoreRing note={82} niveau="FAIBLE" taille={72} />
          <p className="mt-2 text-xs text-white/40">Score moyen (30 derniers trajets)</p>
        </Card>

        <Card className="col-span-3">
          <p className="mb-3 text-sm font-medium text-white/70">Historique des trajets</p>
          <p className="text-sm text-white/30">
            Table des trajets à brancher sur trajetsApi.liste(token, &quot;{params.id}&quot;)
          </p>
        </Card>
      </div>
    </>
  );
}
