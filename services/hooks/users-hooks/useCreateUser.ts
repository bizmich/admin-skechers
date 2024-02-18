import { EditUsersItems } from '@/lib/validations/users-form-validation';
import apiService from '@/services/apiService';
import { CustomError } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<unknown, CustomError, EditUsersItems>({
    mutationFn: (form) => apiService.createUser<unknown, EditUsersItems>(form),
    onSuccess(data) {
      if (data) {
        toast.success('Удачно', {
          description: `Пользователь добавлен`,
        });
      }

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError(error, variables, context) {
      if (error instanceof Error) {
        toast.error('Ошибка', {
          description: error.response.data.message,
        });
      }
    },
  });
}
