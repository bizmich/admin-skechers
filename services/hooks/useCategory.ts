import { useQuery } from '@tanstack/react-query';
import apiService from '../apiService';
import { Category } from '@/types/category-types';

export default function useCategory() {
  return useQuery<Category>({
    queryKey: ['category'],
    queryFn: () => apiService.getCategories<Category>(),
  });
}
