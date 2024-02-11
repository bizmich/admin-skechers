import { Orders } from '@/types';
import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export default function useOrders({
  page,
  perPage,
}: {
  perPage: string;
  page: string;
}) {
  return useQuery<Orders>({
    queryKey: ['orders', page, perPage],
    queryFn: () =>
      apiService.getOrders({
        params: {
          take: Number(perPage),
          skip: (Number(page) - 1) * Number(perPage),
        },
      }),
  });
}
