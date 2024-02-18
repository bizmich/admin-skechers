import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteUser(id),
    onSuccess(data) {
      if (data && typeof data === 'object' && 'message' in data) {
        toast.success('Удачно', {
          description: `Video удален`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
