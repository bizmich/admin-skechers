import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteTechLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteTechLogo(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-tech'] });
    },
  });
}
