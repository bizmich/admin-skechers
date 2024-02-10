import { Settings } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSettings() {
  return useQuery<Settings>({
    queryKey: ['settings'],
    queryFn: () => apiService.getSettings<Settings>(),
  });
}
