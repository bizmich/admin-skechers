import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateOrderStatus(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, Record<'status', string>>({
    mutationFn: (form) =>
      apiService.updateOrderStatus<unknown, Record<'status', string>>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Статус обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-order'] });
    },
  });
}
