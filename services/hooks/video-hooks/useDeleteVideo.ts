import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteVideo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiService.deleteVideo(id),
    onSuccess(data, variables, context) {
      if (data && typeof data === 'object' && 'message' in data) {
        toast.success('Удачно', {
          description: `Video удален`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['videos'] });
    },
  });
}
