import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUploadTechLogo(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: FormData) =>
      apiService.uploadTechLogo(id, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['single-tech'] });
    },
  });
}
