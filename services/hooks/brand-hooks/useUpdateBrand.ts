import { EditBrandItems } from '@/lib/validations/brand-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateBrand(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditBrandItems>({
    mutationFn: (form) =>
      apiService.updateBrand<unknown, EditBrandItems>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Бранд Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-brand'] });
    },
  });
}
