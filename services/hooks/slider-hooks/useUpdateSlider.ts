import { EditSliderItems } from '@/lib/validations/slider-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateSlider(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, EditSliderItems>({
    mutationFn: (form) =>
      apiService.updateSlider<unknown, EditSliderItems>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Обновлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['single-slider'] });
    },
  });
}
