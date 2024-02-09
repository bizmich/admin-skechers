import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUploadVideoLogo(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: FormData) =>
      apiService.uploadVideoLogo(id, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-video'] });
    },
  });
}
