import { SingleUser } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleUser(id: string) {
  return useQuery<SingleUser>({
    queryKey: ['single-user'],
    queryFn: () => apiService.getSingleUser<SingleUser>(id),
    enabled: !!id,
  });
}
