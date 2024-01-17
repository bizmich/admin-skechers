import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Product, SingleProduct } from '@/types';

export default function useSingleProduct(id: string) {
  return useQuery<SingleProduct>({
    queryKey: ['single-product'],
    queryFn: () => apiService.getSingleProduct<SingleProduct>(id),
    enabled: !!id,
  });
}
