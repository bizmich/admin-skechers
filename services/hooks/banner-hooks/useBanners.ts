import { Banner } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useBanners() {
  return useQuery<Banner[]>({
    queryKey: ['banners'],
    queryFn: () => apiService.getBanners<Banner[]>(),
  });
}
