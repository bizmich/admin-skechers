import { EditShopsItems } from '@/lib/validations/shops-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateShop(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditShopsItems>({
    mutationFn: (form) =>
      apiService.updateShop<unknown, EditShopsItems>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-shop'] });
    },
  });
}
