import { UsersFetchResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export interface UsersPost {
  keyword: string | null;
  role: string | null;
  page: string;
  perPage:string
}

export default function useUsers({ keyword, role,page,perPage }: UsersPost) {
  return useQuery<UsersFetchResponse>({
    queryKey: ['users', keyword, role, page],
    queryFn: () =>
      apiService.getUsers<UsersFetchResponse>({
        params: {
          keyword,
          role,
          page,
          perPage,
          skip: (Number(page) - 1) * Number(perPage),
        },
      }),
  });
}
