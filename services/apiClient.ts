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
  getSingleProduct = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/products/${id}`)
      .then((response) => response.data);
  };
  addColorImageProduct = async <G>(id: string, form: FormData) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/product-galleries/${id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  };
  deleteColorImageProduct = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/product-galleries/${id}`)
      .then((response) => response.data);
  };
}

export default APIClient;
