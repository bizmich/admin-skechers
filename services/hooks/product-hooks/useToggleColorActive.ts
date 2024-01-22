import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import apiService from '../../apiService';

export interface ColorActive {
  id: string;
  active: boolean;
}

export default function useToggleColorActive() {
  const queryClient = useQueryClient();

  return useMutation<any, Error, ColorActive>({
    mutationFn: (form: ColorActive) =>
      apiService.toggleProductColorActive(form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['product-color-gallery'] });
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
      toast.success('Удачно', {
        description: `Фотография добавлено`,
      });
    },
    onError(error, variables, context) {
      toast.error('Ошибка', {
        description: `Произошла ошибка при добавление`,
      });
      console.log(error.message);
    },
  });
}
