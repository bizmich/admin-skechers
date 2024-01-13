import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Product } from '@/types';

export default function useSingleProduct(id: string) {
  return useQuery<Product>({
    queryKey: ['single-product'],
    queryFn: () => apiService.getSingleProduct<Product>(id),
    enabled: !!id,
  });
}
