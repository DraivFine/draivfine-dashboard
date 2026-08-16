export type NiveauRisque = 'FAIBLE' | 'MODERE' | 'ELEVE' | 'CRITIQUE';

export type StatutAlerte = 'NOUVELLE' | 'EN_COURS' | 'RESOLUE' | 'IGNOREE';

export type TypeAlerte =
  | 'FREINAGE_BRUSQUE'
  | 'ACCELERATION_BRUSQUE'
  | 'EXCES_VITESSE'
  | 'TRAJECTOIRE_ANORMALE'
  | 'URGENCE';

export type StatutAbonnement = 'ACTIF' | 'EXPIRE' | 'SUSPENDU' | 'ANNULE';

export interface Conducteur {
  id: string;
  nom: string;
  telephone: string;
  qrCodeBadge: string;
  actif: boolean;
  creeLe: string;
  scoreMoyen?: number;
  niveauRisque?: NiveauRisque;
}

export interface Vehicule {
  id: string;
  conducteurId: string;
  immatriculation: string;
  type: 'MOTO' | 'VOITURE' | 'CAMIONNETTE';
}

export interface Trajet {
  id: string;
  conducteurId: string;
  vehiculeId: string;
  debut: string;
  fin: string | null;
  distanceKm: number | null;
  enCours: boolean;
  score?: Score;
}

export interface Score {
  id: string;
  trajetId: string;
  noteGlobale: number;
  niveauRisque: NiveauRisque;
  freinagesBrusques: number;
  accelerationsBrusques: number;
  excesVitesse: number;
  trajectoireAnormale: boolean;
}

export interface Alerte {
  id: string;
  scoreId: string | null;
  conducteurNom?: string;
  type: TypeAlerte;
  statut: StatutAlerte;
  message: string | null;
  latitude: number | null;
  longitude: number | null;
  creeLe: string;
}

export interface Abonnement {
  id: string;
  conducteurId: string;
  conducteurNom?: string;
  plan: 'BASIC' | 'PRO' | 'ENTREPRISE';
  statut: StatutAbonnement;
  renouvelleLe: string;
}

export interface PositionLive {
  conducteurId: string;
  conducteurNom: string;
  latitude: number;
  longitude: number;
  vitesse: number;
  horodatage: string;
}
