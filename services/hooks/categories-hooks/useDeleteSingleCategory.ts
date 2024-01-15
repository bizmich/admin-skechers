import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';
import { toast } from 'sonner';

const useDeleteSingleCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteSingleCategory(id),
    onSuccess(data, variables, context) {
      if (data && typeof data === 'object' && 'message' in data) {
        toast.info('Ошибка', {
          description: `Категория имеет подкатегорию`,
        });
      } else {
        toast.success('Удачно', {
          description: `Категория удаленна`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['category'] });
    },
  });
};

export default useDeleteSingleCategory;
