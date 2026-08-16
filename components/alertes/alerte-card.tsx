import { AlertOctagon, TrendingDown, Gauge, MapPin, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Alerte } from '@/types';

const ICONES = {
  URGENCE: AlertOctagon,
  FREINAGE_BRUSQUE: TrendingDown,
  ACCELERATION_BRUSQUE: Zap,
  EXCES_VITESSE: Gauge,
  TRAJECTOIRE_ANORMALE: MapPin,
} as const;

const LABELS_TYPE: Record<Alerte['type'], string> = {
  URGENCE: "Bouton d'urgence",
  FREINAGE_BRUSQUE: 'Freinage brusque',
  ACCELERATION_BRUSQUE: 'Accélération brusque',
  EXCES_VITESSE: 'Excès de vitesse',
  TRAJECTOIRE_ANORMALE: 'Trajectoire anormale',
};

export function AlerteCard({ alerte }: { alerte: Alerte }) {
  const Icone = ICONES[alerte.type];
  const urgente = alerte.type === 'URGENCE';

  return (
    <div
      className={`flex items-start gap-3 rounded-xl border p-4 ${
        urgente ? 'border-risque-critique/40 bg-risque-critique/5' : 'border-graphite-700 bg-graphite-800'
      }`}
    >
      <Icone
        size={18}
        className={urgente ? 'text-risque-critique' : 'text-white/50'}
        strokeWidth={1.75}
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">{LABELS_TYPE[alerte.type]}</span>
          {urgente && <Badge ton="rouge">Urgent</Badge>}
        </div>
        {alerte.conducteurNom && (
          <p className="mt-0.5 text-sm text-white/50">{alerte.conducteurNom}</p>
        )}
        <p className="mt-1 text-xs text-white/30">
          {new Date(alerte.creeLe).toLocaleString('fr-FR')}
        </p>
      </div>
      <Badge ton={alerte.statut === 'NOUVELLE' ? 'ambre' : 'neutre'}>
        {alerte.statut.replace('_', ' ').toLowerCase()}
      </Badge>
    </div>
  );
}
