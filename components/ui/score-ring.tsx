import type { NiveauRisque } from '@/types';

const COULEURS: Record<NiveauRisque, string> = {
  FAIBLE: '#2F9E58',
  MODERE: '#C88A1D',
  ELEVE: '#D2691E',
  CRITIQUE: '#B23A3A',
};

const LABELS: Record<NiveauRisque, string> = {
  FAIBLE: 'Faible',
  MODERE: 'Modéré',
  ELEVE: 'Élevé',
  CRITIQUE: 'Critique',
};

interface ScoreRingProps {
  note: number; // 0-100
  niveau: NiveauRisque;
  taille?: number;
  className?: string;
}

/**
 * Élément signature du dashboard : un anneau de progression qui encode
 * simultanément la note (longueur de l'arc) et le niveau de risque
 * (couleur), utilisé de façon cohérente dans les tables, les cartes de
 * conducteur et le détail de trajet — c'est le repère visuel unique du
 * produit, à ne pas dupliquer sous une autre forme ailleurs dans l'UI.
 */
export function ScoreRing({ note, niveau, taille = 56, className }: ScoreRingProps) {
  const rayon = (taille - 8) / 2;
  const circonference = 2 * Math.PI * rayon;
  const progression = (Math.max(0, Math.min(100, note)) / 100) * circonference;
  const couleur = COULEURS[niveau];

  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className ?? ''}`}>
      <svg width={taille} height={taille} viewBox={`0 0 ${taille} ${taille}`} role="img">
        <title>{`Score ${Math.round(note)}, risque ${LABELS[niveau]}`}</title>
        <circle
          cx={taille / 2}
          cy={taille / 2}
          r={rayon}
          fill="none"
          stroke="var(--ring-track, #2B332F)"
          strokeWidth={4}
        />
        <circle
          cx={taille / 2}
          cy={taille / 2}
          r={rayon}
          fill="none"
          stroke={couleur}
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={`${progression} ${circonference}`}
          transform={`rotate(-90 ${taille / 2} ${taille / 2})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-current text-[13px] font-semibold"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {Math.round(note)}
        </text>
      </svg>
      <span className="text-[11px] font-medium" style={{ color: couleur }}>
        {LABELS[niveau]}
      </span>
    </div>
  );
}
