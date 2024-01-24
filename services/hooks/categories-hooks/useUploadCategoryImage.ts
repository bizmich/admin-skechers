import apiService from '@/services/apiService';
import { useMutation } from '@tanstack/react-query';

export const useUploadCategoryImage = (id: string) => {
  return useMutation({
    mutationFn: (form: any) => apiService.uploadCategoryImage(id, form),
  });
};
