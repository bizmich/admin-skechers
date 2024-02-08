import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateBrand() {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, Record<'title', string>>({
    mutationFn: (form) =>
      apiService.createBrand<unknown, Record<'title', string>>(form),
    onSuccess(data, variables, context) {
      if (data) {
        toast.success('Удачно', {
          description: `Бранд удален`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}
