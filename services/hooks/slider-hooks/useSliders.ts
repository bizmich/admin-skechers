import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Slider } from '@/types';

export default function useSliders() {
  return useQuery<Slider[]>({
    queryKey: ['sliders'],
    queryFn: () => apiService.getSliders<Slider[]>(),
  });
}
