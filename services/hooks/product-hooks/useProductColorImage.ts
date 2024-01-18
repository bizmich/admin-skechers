import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';
import { toast } from 'sonner';

interface ImageUpload {
  id: string;
  imageUrl: string;
}

export default function useProductColorImage(id: string) {
  const queryClient = useQueryClient();

  return useMutation<ImageUpload, Error, FormData>({
    mutationFn: (form: FormData) => apiService.addColorImageProduct(id, form),
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
