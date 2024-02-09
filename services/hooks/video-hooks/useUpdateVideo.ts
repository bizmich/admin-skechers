import { EditVideoItems } from '@/lib/validations/video-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateVideo(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditVideoItems>({
    mutationFn: (form) =>
      apiService.updateVideo<unknown, EditVideoItems>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-video'] });
    },
  });
}
