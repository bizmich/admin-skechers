import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Video } from '@/types';

export default function useVideos() {
  return useQuery<Video[]>({
    queryKey: ['videos'],
    queryFn: () => apiService.getVideos<Video[]>(),
  });
}
