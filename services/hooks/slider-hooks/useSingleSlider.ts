import { Slider } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleSlider(id: string) {
  return useQuery<Slider>({
    queryKey: ['single-slider'],
    queryFn: () => apiService.getSingleSlider<Slider>(id),
    enabled: !!id,
  });
}
