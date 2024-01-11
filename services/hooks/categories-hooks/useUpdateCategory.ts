import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

const useUpdateCategory = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: any) => apiService.updateSingleCategory(id, form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['category'] });
    },
  });
};

export default useUpdateCategory;
