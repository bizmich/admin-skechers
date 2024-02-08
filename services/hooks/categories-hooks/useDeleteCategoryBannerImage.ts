import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteCategoryBannerImage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteCategoryBannerImage(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-category'] });
    },
  });
}
