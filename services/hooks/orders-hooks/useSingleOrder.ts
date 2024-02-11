import { SingleOrder } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleOrder(id: string) {
  return useQuery<SingleOrder>({
    queryKey: ['single-order'],
    queryFn: () => apiService.getSingleOrder<SingleOrder>(id),
    enabled: !!id,
  });
}
