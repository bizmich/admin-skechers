import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Brands } from '@/types';

export default function useBrands() {
  return useQuery<Brands[]>({
    queryKey: ['brands'],
    queryFn: () => apiService.getBrands<Brands[]>(),
  });
}
