import { Video } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useSingleVideo(id: string) {
  return useQuery<Video>({
    queryKey: ['single-video'],
    queryFn: () => apiService.getSingleVideo<Video>(id),
    enabled: !!id,
  });
}
