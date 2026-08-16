import { Topbar } from '@/components/layout/topbar';
import { ConducteurTable } from '@/components/conducteurs/conducteur-table';
import type { Conducteur } from '@/types';

// TODO: remplacer par `await conducteursApi.liste(token)` (server component + cookies())
const CONDUCTEURS_DEMO: Conducteur[] = [
  {
    id: '1',
    nom: 'Jean Mbarga',
    telephone: '+237 6 90 12 34 56',
    qrCodeBadge: 'QR-001',
    actif: true,
    creeLe: new Date().toISOString(),
    scoreMoyen: 82,
    niveauRisque: 'FAIBLE',
  },
  {
    id: '2',
    nom: 'Aïcha Njoya',
    telephone: '+237 6 77 88 99 00',
    qrCodeBadge: 'QR-002',
    actif: true,
    creeLe: new Date().toISOString(),
    scoreMoyen: 54,
    niveauRisque: 'ELEVE',
  },
];

export default function ConducteursPage() {
  return (
    <>
      <Topbar titre="Conducteurs" />
      <div className="p-6">
        <ConducteurTable conducteurs={CONDUCTEURS_DEMO} />
      </div>
    </>
  );
}
