import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteCategoryImage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiService.deleteCategoryImage(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-category'] });
    },
  });
}
