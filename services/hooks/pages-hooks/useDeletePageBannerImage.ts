import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeletePageBannerImage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deletePageBannerImage(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-page'] });
    },
  });
}
