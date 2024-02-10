import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUploadFooterLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: FormData) =>
      apiService.uploadSettingFooterLogo(form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });
}
