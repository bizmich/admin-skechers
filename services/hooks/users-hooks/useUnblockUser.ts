import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUnblockUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.unblockUser(id),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Пользователь разблокирован`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
