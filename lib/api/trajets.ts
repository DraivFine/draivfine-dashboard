import { apiClient } from './client';
import type { Trajet } from '@/types';

export const trajetsApi = {
  liste: (token: string, conducteurId?: string) =>
    apiClient.get<Trajet[]>(
      conducteurId ? `/trajets?conducteurId=${conducteurId}` : '/trajets',
      token,
    ),
  detail: (id: string, token: string) => apiClient.get<Trajet>(`/trajets/${id}`, token),
};
