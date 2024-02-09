import { filterFormTypes } from '@/lib/validations/product-filters-validation';
import axiosInstance from './axiosInstance';
import { UpdateProductColorImage } from './hooks/product-hooks/useUpdateProductColorImage';
import { AxiosRequestConfig } from 'axios';
import { ColorActive } from './hooks/product-hooks/useToggleColorActive';

class APIClient {
  // categories
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

  uploadCategoryImage = async <G>(id: string, form: FormData) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/category-image/${id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  };

  uploadCategoryBannerImage = async <G>(id: string, form: FormData) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/category-banner/${id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  };

  deleteCategoryImage = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/category-image/${id}`)
      .then((response) => response.data);
  };

  deleteCategoryBannerImage = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/category-banner/${id}`)
      .then((response) => response.data);
  };

  // product
  getProduct = async <G>(
    form?: filterFormTypes,
    params?: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>('/dashboard/products', { ...form }, params)
      .then((response) => response.data);
  };

  getSingleProduct = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/products/${id}`)
      .then((response) => response.data);
  };

  toggleProductColorActive = async <G>(form: ColorActive) => {
    return await axiosInstance
      .patch<G>(`/dashboard/product-colors/${form.id}`, { active: form.active })
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
  getProductColorGallery = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/product-galleries/${id}`)
      .then((response) => response.data);
  };
  deleteColorImageProduct = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/product-galleries/${id}`)
      .then((response) => response.data);
  };
  updateColorImageProduct = async <G>(form: UpdateProductColorImage) => {
    return await axiosInstance
      .patch<G>(`/dashboard/product-galleries/${form.id}`, {
        galleries: form.galleries,
      })
      .then((response) => response.data);
  };
  updateSingleProduct = async <G>(id: string, form: any) => {
    return await axiosInstance
      .patch<G>(`/dashboard/products/${id}`, { ...form })
      .then((response) => response.data);
  };

  // Brands

  getBrands = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/brends`)
      .then((response) => response.data);
  };

  getSingleBrands = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/brends/${id}`)
      .then((response) => response.data);
  };

  deleteBrand = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/brends/${id}`)
      .then((response) => response.data);
  };

  createBrand = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/brends`, form)
      .then((response) => response.data);
  };

  updateBrand = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/brends/${id}`, form)
      .then((response) => response.data);
  };

  uploadBrandLogo = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/brends/${id}`, form, params)
      .then((response) => response.data);
  };

  uploadBrandBanner = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/brend-banner/${id}`, form, params)
      .then((response) => response.data);
  };

  deleteBrandLogo = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/brends/${id}`)
      .then((response) => response.data);
  };

  deleteBrandBannerImage = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/brend-banner/${id}`)
      .then((response) => response.data);
  };

  // Technologies

  getTechnologies = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/technologies`)
      .then((response) => response.data);
  };

  getSingleTech = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/technologies/${id}`)
      .then((response) => response.data);
  };

  createTech = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/technologies`, form)
      .then((response) => response.data);
  };

  deleteTech = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/technologies/${id}`)
      .then((response) => response.data);
  };

  updateTech = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/technologies/${id}`, form)
      .then((response) => response.data);
  };

  uploadTechLogo = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/technologies/${id}`, form, params)
      .then((response) => response.data);
  };

  deleteTechLogo = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/technologies/${id}`)
      .then((response) => response.data);
  };

  // Slider

  getSliders = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/sliders`)
      .then((response) => response.data);
  };

  getSingleSlider = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/sliders/${id}`)
      .then((response) => response.data);
  };

  createSlider = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/sliders`, form)
      .then((response) => response.data);
  };

  deleteSlider = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/sliders/${id}`)
      .then((response) => response.data);
  };

  updateSlider = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/sliders/${id}`, form)
      .then((response) => response.data);
  };

  uploadSliderLogo = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/sliders/${id}`, form, params)
      .then((response) => response.data);
  };

  deleteSliderLogo = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/sliders/${id}`)
      .then((response) => response.data);
  };
}

export default APIClient;
