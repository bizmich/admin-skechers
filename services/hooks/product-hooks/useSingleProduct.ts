import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleProduct(id: string) {
  return useQuery({
    queryKey: ['single-product'],
    queryFn: () => apiService.getSingleProduct(id),
    enabled: !!id,
  });
}
