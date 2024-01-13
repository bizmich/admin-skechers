import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useDeleteProductColorImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteColorImageProduct(id),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
    },
  });
}
