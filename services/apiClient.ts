import { filterFormTypes } from '@/lib/validations/product-filters-validation';
import axiosInstance from './axiosInstance';

class APIClient {
  getCategories = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/categories`)
      .then((response) => response.data);
  };
  getSingleCategories = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/categories/${id}`)
      .then((response) => response.data);
  };
  getProduct = async <G>(form?: filterFormTypes) => {
    return await axiosInstance
      .post<G>('/dashboard/products/advanced-filter', { ...form })
      .then((response) => response.data);
  };
}

export default APIClient;
