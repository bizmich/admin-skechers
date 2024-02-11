import { Users } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleUser(id: string) {
  return useQuery<Users>({
    queryKey: ['single-user'],
    queryFn: () => apiService.getSingleUser<Users>(id),
    enabled: !!id,
  });
}
