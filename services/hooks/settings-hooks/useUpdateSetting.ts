import { EditSettingsItems } from '@/lib/validations/settings-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditSettingsItems>({
    mutationFn: (form) =>
      apiService.updateSetting<unknown, EditSettingsItems>(form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });
}
