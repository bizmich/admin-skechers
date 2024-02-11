import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useBlockUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.blockUser(id),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Пользователь заблокирован`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
