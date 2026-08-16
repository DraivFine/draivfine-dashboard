import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';

// TODO: remplacer par `await trajetsApi.liste(token)`
export default function TrajetsPage() {
  return (
    <>
      <Topbar titre="Trajets" />
      <div className="p-6">
        <Card>
          <p className="text-sm text-white/30">
            Liste des trajets à brancher sur trajetsApi.liste(token) — mêmes colonnes que
            ConducteurTable, avec en plus distance, durée et lien vers /trajets/[id].
          </p>
        </Card>
      </div>
    </>
  );
}
