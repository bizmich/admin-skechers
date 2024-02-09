import { Banner, Slider } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleBanner(id: string) {
  return useQuery<Banner>({
    queryKey: ['single-banner'],
    queryFn: () => apiService.getSingleBanner<Banner>(id),
    enabled: !!id,
  });
}
