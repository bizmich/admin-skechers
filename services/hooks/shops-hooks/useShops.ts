import { Shops } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useShops() {
  return useQuery<Shops[]>({
    queryKey: ['shops'],
    queryFn: () => apiService.getShops<Shops[]>(),
  });
}
