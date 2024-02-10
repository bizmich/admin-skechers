import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteSettingMainLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiService.deleteSettingMainLogo(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });
}
