import { EditBannerItems } from '@/lib/validations/banner-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateBanner(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditBannerItems>({
    mutationFn: (form) =>
      apiService.updateBanner<unknown, EditBannerItems>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-banner'] });
    },
  });
}
