import { EditUsersItems } from '@/lib/validations/users-form-validation';
import apiService from '@/services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateUser(id: string) {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, Partial<EditUsersItems>>({
    mutationFn: (form) =>
      apiService.editUser<unknown, Partial<EditUsersItems>>(id, form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Пользователь изменен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
