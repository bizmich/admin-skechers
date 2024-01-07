import { useQuery } from '@tanstack/react-query';
import apiService from '../apiService';

export default function useCategory() {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => apiService.getCategories(),
  });
}
