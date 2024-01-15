import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../../apiService';
import { toast } from 'sonner';

const useUpdateSingleProduct = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: any) => apiService.updateSingleProduct(id, form),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['single-product'] });
      toast.success('Удачно', {
        description: `Товар обновлен`,
      });
    },
  });
};

export default useUpdateSingleProduct;
