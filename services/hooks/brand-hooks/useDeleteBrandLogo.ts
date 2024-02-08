import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteBrandLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteBrandLogo(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-brand'] });
    },
  });
}
