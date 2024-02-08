import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Brands } from '@/types';

export default function useSingleBrands(id: string) {
  return useQuery<Brands>({
    queryKey: ['single-brand'],
    queryFn: () => apiService.getSingleBrands<Brands>(id),
    enabled: !!id,
  });
}
