import { UsersFetchResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export interface UsersPost {
  keyword: string | null;
  role: string | null;
}

export default function useUsers({ keyword, role }: UsersPost) {
  return useQuery<UsersFetchResponse>({
    queryKey: ['users', keyword, role],
    queryFn: () =>
      apiService.getUsers<UsersFetchResponse>({
        params: {
          keyword,
          role,
        },
      }),
  });
}
