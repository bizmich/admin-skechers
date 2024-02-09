import { Technologies } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleTech(id: string) {
  return useQuery<Technologies>({
    queryKey: ['single-tech'],
    queryFn: () => apiService.getSingleTech<Technologies>(id),
    enabled: !!id,
  });
}
