import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

export interface UpdateProductColorImage {
  id: string;
  sortOrder: number | string;
  mainImage: boolean;
}

export default function useUpdateProductColorImage() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, UpdateProductColorImage>({
    mutationFn: (form: UpdateProductColorImage) =>
      apiService.updateColorImageProduct(form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: ['product-color-gallery'],
      });
    },
  });
}
