import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteSliderLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteSliderLogo(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-slider'] });
    },
  });
}
