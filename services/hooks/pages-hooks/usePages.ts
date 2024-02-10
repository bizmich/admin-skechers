import { Pages } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function usePages() {
  return useQuery<Pages[]>({
    queryKey: ['pages'],
    queryFn: () => apiService.getPages<Pages[]>(),
  });
}
