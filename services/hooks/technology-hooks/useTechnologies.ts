import { Technologies } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useTechnologies() {
  return useQuery<Technologies[]>({
    queryKey: ['technologies'],
    queryFn: () => apiService.getTechnologies<Technologies[]>(),
  });
}
