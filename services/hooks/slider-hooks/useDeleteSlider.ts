import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteSlider() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteSlider(id),
    onSuccess(data, variables, context) {
      if (data && typeof data === 'object' && 'message' in data) {
        toast.success('Удачно', {
          description: `Slider удален`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['sliders'] });
    },
  });
}
