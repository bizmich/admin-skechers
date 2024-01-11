import { filterFormTypes } from '@/lib/validations/product-filters-validation';
import axiosInstance from './axiosInstance';

class APIClient {
  getCategories = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/categories`)
      .then((response) => response.data);
  };
  getSingleCategory = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/categories/${id}`)
      .then((response) => response.data);
  };
  updateSingleCategory = async <G>(id: string, form: any) => {
    return await axiosInstance
      .patch<G>(`/dashboard/categories/${id}`, { ...form })
      .then((response) => response.data);
  };
  createSingleCategory = async <G>(form: any) => {
    return await axiosInstance
      .post<G>(`/dashboard/categories`, { ...form })
      .then((response) => response.data);
  };
  deleteSingleCategory = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/categories/${id}`)
      .then((response) => response.data);
  };
  getProduct = async <G>(form?: filterFormTypes) => {
    return await axiosInstance
      .post<G>('/dashboard/products', { ...form })
      .then((response) => response.data);
  };
}

export default APIClient;
