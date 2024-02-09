import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteBannerLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteBannerLogo(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-banner'] });
    },
  });
}
