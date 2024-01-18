import { useQuery } from '@tanstack/react-query';
import apiService from '../../apiService';
import { Gallery } from '@/types';

export default function useProductColorGallery(id: string) {
  return useQuery<Gallery[], Error>({
    queryKey: ['product-color-gallery', id],
    queryFn: () => apiService.getProductColorGallery<Gallery[]>(id),
  });
}
