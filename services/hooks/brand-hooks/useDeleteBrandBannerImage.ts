import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteBrandBannerImage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteBrandBannerImage(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-brand'] });
    },
  });
}
