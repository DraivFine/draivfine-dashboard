import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';

export default function ParametresPage() {
  return (
    <>
      <Topbar titre="Paramètres" />
      <div className="p-6">
        <Card>
          <p className="text-sm text-white/30">
            Seuils de scoring, gestion des comptes gestionnaires, clés API — à définir.
          </p>
        </Card>
      </div>
    </>
  );
}
