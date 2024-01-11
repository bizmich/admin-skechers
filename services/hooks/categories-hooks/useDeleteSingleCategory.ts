import { useMutation } from '@tanstack/react-query';
import apiService from '../../apiService';

const useDeleteSingleCategory = () => {
  return useMutation({
    mutationFn: (id: string) => apiService.deleteSingleCategory(id),
  });
};

export default useDeleteSingleCategory;
