import { Color } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';
import { toast } from 'sonner';

export interface UpdateProductColorOrder {
  id: string;
  colors: Color[];
}

export default function useUpdateProductColorOrder() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, UpdateProductColorOrder>({
    mutationFn: (form: UpdateProductColorOrder) =>
      apiService.updateColorProductOrder(form.id, {
        colors: form.colors,
      }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['product-color-gallery'],
      });
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
      toast.success('Удачно', {
        description: 'Список обновлен',
      });
    },
  });
}
