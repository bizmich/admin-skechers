import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Gallery } from '@/types';

export interface UpdateProductColorImage {
  id: string;
  galleries: Gallery[];
}

export default function useUpdateProductColorImage() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, UpdateProductColorImage>({
    mutationFn: (form: UpdateProductColorImage) =>
      apiService.updateColorImageProduct(form),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['product-color-gallery'],
      });
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
    },
  });
}
