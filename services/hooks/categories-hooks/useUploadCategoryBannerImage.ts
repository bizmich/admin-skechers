import apiService from '@/services/apiService';
import { useMutation } from '@tanstack/react-query';

export const useUploadCategoryBannerImage = (id: string) => {
  return useMutation({
    mutationFn: (form: any) => apiService.uploadCategoryBannerImage(id, form),
  });
};
