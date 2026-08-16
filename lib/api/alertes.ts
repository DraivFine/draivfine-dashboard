import { apiClient } from './client';
import type { Alerte, StatutAlerte } from '@/types';

export const alertesApi = {
  liste: (token: string, statut?: StatutAlerte) =>
    apiClient.get<Alerte[]>(statut ? `/alertes?statut=${statut}` : '/alertes', token),
  mettreAJourStatut: (id: string, statut: StatutAlerte, token: string) =>
    apiClient.patch<Alerte>(`/alertes/${id}`, { statut }, token),
};
