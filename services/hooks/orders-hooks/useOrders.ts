import { Orders } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export interface UsersPost {
  createDateTo: string | null;
  createdDateFrom: string | null;
  status: string | null;
}

export default function useOrders({
  page,
  perPage,
  form,
}: {
  perPage: string;
  page: string;
  form: UsersPost;
}) {
  return useQuery<Orders>({
    queryKey: ['orders', page, perPage, form],
    queryFn: () =>
      apiService.getOrders<Orders, UsersPost>(form, {
        params: {
          take: Number(perPage),
          skip: (Number(page) - 1) * Number(perPage),
        },
      }),
  });
}
