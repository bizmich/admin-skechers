import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { FetchResponse, Product } from '@/types';
import { filterFormTypes } from '@/lib/validations/product-filters-validation';

export default function useProduct(form?: filterFormTypes) {
  return useQuery<FetchResponse<Product[]>>({
    queryKey: ['product', form],
    queryFn: () => apiService.getProduct(form),
  });
}
