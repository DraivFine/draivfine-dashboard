import Link from 'next/link';
import { ScoreRing } from '@/components/ui/score-ring';
import { Badge } from '@/components/ui/badge';
import type { Conducteur } from '@/types';

export function ConducteurTable({ conducteurs }: { conducteurs: Conducteur[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-graphite-700">
      <table className="w-full text-sm">
        <thead className="bg-graphite-800 text-left text-xs uppercase tracking-wide text-white/40">
          <tr>
            <th className="px-4 py-3 font-medium">Conducteur</th>
            <th className="px-4 py-3 font-medium">Téléphone</th>
            <th className="px-4 py-3 font-medium">Statut</th>
            <th className="px-4 py-3 font-medium">Score</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-graphite-700">
          {conducteurs.map((c) => (
            <tr key={c.id} className="hover:bg-graphite-800/60">
              <td className="px-4 py-3">
                <Link href={`/conducteurs/${c.id}`} className="font-medium text-white hover:underline">
                  {c.nom}
                </Link>
              </td>
              <td className="px-4 py-3 text-white/60">{c.telephone}</td>
              <td className="px-4 py-3">
                <Badge ton={c.actif ? 'vert' : 'neutre'}>{c.actif ? 'Actif' : 'Inactif'}</Badge>
              </td>
              <td className="px-4 py-3">
                {c.scoreMoyen != null && c.niveauRisque ? (
                  <ScoreRing note={c.scoreMoyen} niveau={c.niveauRisque} taille={40} />
                ) : (
                  <span className="text-white/30">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
