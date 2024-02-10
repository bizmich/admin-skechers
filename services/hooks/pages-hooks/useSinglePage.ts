import { Pages } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSinglePage(id: string) {
  return useQuery<Pages>({
    queryKey: ['single-page'],
    queryFn: () => apiService.getSinglePage<Pages>(id),
    enabled: !!id,
  });
}
