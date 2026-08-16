import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';
import { ScoreRing } from '@/components/ui/score-ring';

// TODO: remplacer par `await trajetsApi.detail(params.id, token)`.
// Le tracé GPS (donneesCapteur) se branche ici en overlay sur MapLive
// ou une carte statique dédiée au replay.
export default function DetailTrajetPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Topbar titre="Détail trajet" />
      <div className="grid grid-cols-3 gap-4 p-6">
        <Card className="col-span-2">
          <p className="text-sm text-white/50">Trajet #{params.id}</p>
          <p className="mt-1 text-sm text-white/40">12.4 km — 34 min</p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <ScoreRing note={61} niveau="MODERE" taille={72} />
        </Card>

        <Card className="col-span-3">
          <p className="mb-3 text-sm font-medium text-white/70">Détail du scoring</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-white/40">Freinages brusques</p>
              <p className="font-display text-lg text-white">3</p>
            </div>
            <div>
              <p className="text-white/40">Excès de vitesse</p>
              <p className="font-display text-lg text-white">1</p>
            </div>
            <div>
              <p className="text-white/40">Trajectoire anormale</p>
              <p className="font-display text-lg text-white">Non</p>
            </div>
          </div>
        </Card>

        <Card className="col-span-3">
          <p className="mb-3 text-sm font-medium text-white/70">Tracé GPS</p>
          <p className="text-sm text-white/30">
            Carte de replay à brancher sur les données de donneesCapteur (lat/lng/horodatage).
          </p>
        </Card>
      </div>
    </>
  );
}
