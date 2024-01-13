import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

interface ImageUpload {
  id: string;
  imageUrl: string;
}

export default function useProductColorImage(id: string) {
  const queryClient = useQueryClient();

  return useMutation<ImageUpload, Error, FormData>({
    mutationFn: (form: FormData) => apiService.addColorImageProduct(id, form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
    },
  });
}
