import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateTech() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, Record<'title', string>>({
    mutationFn: (form) =>
      apiService.createTech<unknown, Record<'title', string>>(form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Технология создано`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['technologies'] });
    },
  });
}
