import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUploadCategoryImage = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: any) => apiService.uploadCategoryImage(id, form),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-category'] });
    },
  });
};
