import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useUpdateProductColorImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.updateColorImageProduct(id),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
    },
  });
}
