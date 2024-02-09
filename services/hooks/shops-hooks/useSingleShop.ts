import { Shops, Video } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleShop(id: string) {
  return useQuery<Shops>({
    queryKey: ['single-shop'],
    queryFn: () => apiService.getSingleShop<Shops>(id),
    enabled: !!id,
  });
}
