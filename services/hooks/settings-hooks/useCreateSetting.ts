import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateSetting() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, Record<'title', string>>({
    mutationFn: (form) =>
      apiService.createSetting<unknown, Record<'title', string>>(form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Создана`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });
}
