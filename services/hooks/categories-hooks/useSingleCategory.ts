import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';

export interface SingleCategory {
  id: string;
  parentId: null | string;
  href: string;
  name: string;
  active: boolean;
  sortOrder: number;
  imageUrlForHome: string;
  bannerUrl: null | string;
  showInHome: boolean;
}

export default function useSingleCategory(id: string) {
  return useQuery<SingleCategory>({
    queryKey: ['single-category'],
    queryFn: () => apiService.getSingleCategory<SingleCategory>(id),
    staleTime: 0,
    retryOnMount: true,
    refetchIntervalInBackground: true,
  });
}
