import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteVideoLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteVideoLogo(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-video'] });
    },
  });
}
