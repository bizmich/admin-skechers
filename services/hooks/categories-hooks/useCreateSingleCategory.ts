import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';

const useCreateSingleCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: any) => apiService.createSingleCategory(form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['category'] });
    },
  });
};

export default useCreateSingleCategory;
