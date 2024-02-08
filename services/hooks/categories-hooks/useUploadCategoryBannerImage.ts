import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUploadCategoryBannerImage = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: any) => apiService.uploadCategoryBannerImage(id, form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['single-category'] });
    },
  });
};
