import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateVideo() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, Record<'title', string>>({
    mutationFn: (form) =>
      apiService.createVideo<unknown, Record<'title', string>>(form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Video создан`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['videos'] });
    },
  });
}
