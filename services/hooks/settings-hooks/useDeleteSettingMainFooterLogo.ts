import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteSettingMainFooterLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiService.deleteSettingFooterLogo(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });
}
