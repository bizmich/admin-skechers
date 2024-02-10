import { EditPagesItems } from '@/lib/validations/pages-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdatePage(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditPagesItems>({
    mutationFn: (form) =>
      apiService.updatePage<unknown, EditPagesItems>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-page'] });
    },
  });
}
