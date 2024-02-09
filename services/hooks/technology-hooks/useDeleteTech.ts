import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteTech() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteTech(id),
    onSuccess(data, variables, context) {
      if (data && typeof data === 'object' && 'message' in data) {
        toast.success('Удачно', {
          description: `Технология удален`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['technologies'] });
    },
  });
}
