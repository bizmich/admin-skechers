import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useDeleteProductColorImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteColorImageProduct(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
      queryClient.invalidateQueries({
        queryKey: ['product-color-gallery'],
      });
    },
  });
}
