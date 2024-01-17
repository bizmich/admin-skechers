import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { FetchResponse, Product } from '@/types';
import { filterFormTypes } from '@/lib/validations/product-filters-validation';

export default function useProduct(
  form: filterFormTypes,
  { keyword, perPage, page }: { keyword: string; perPage: string; page: string }
) {
  return useQuery<FetchResponse<Product[]>>({
    queryKey: ['product', form],
    queryFn: () =>
      apiService.getProduct(form, {
        params: {
          keyword: keyword,
          take: perPage,
          skip: (Number(page) - 1) * Number(perPage),
          page: page,
        },
      }),
  });
}
