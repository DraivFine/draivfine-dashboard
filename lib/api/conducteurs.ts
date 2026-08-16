import { apiClient } from './client';
import type { Conducteur } from '@/types';

export const conducteursApi = {
  liste: (token: string) => apiClient.get<Conducteur[]>('/conducteurs', token),
  detail: (id: string, token: string) => apiClient.get<Conducteur>(`/conducteurs/${id}`, token),
  creer: (data: Partial<Conducteur>, token: string) =>
    apiClient.post<Conducteur>('/conducteurs', data, token),
  mettreAJour: (id: string, data: Partial<Conducteur>, token: string) =>
    apiClient.patch<Conducteur>(`/conducteurs/${id}`, data, token),
};
