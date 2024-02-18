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

  updateColorProductOrder = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/products/${id}/colors-order`, form)
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

  // banners

  getBanners = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/banners`)
      .then((response) => response.data);
  };

  getSingleBanner = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/banners/${id}`)
      .then((response) => response.data);
  };

  createBanner = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/banners`, form)
      .then((response) => response.data);
  };

  deleteBanner = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/banners/${id}`)
      .then((response) => response.data);
  };

  updateBanner = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/banners/${id}`, form)
      .then((response) => response.data);
  };

  uploadBannerLogo = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/banners/${id}`, form, params)
      .then((response) => response.data);
  };

  deleteBannerLogo = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/banners/${id}`)
      .then((response) => response.data);
  };

  // videos

  getVideos = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/videos`)
      .then((response) => response.data);
  };

  getSingleVideo = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/videos/${id}`)
      .then((response) => response.data);
  };

  createVideo = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/videos`, form)
      .then((response) => response.data);
  };

  deleteVideo = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/videos/${id}`)
      .then((response) => response.data);
  };

  updateVideo = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/videos/${id}`, form)
      .then((response) => response.data);
  };

  uploadVideoLogo = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/videos/${id}`, form, params)
      .then((response) => response.data);
  };

  deleteVideoLogo = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/videos/${id}`)
      .then((response) => response.data);
  };

  // shops

  getShops = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/shops`)
      .then((response) => response.data);
  };

  getSingleShop = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/shops/${id}`)
      .then((response) => response.data);
  };

  createShop = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/shops`, form)
      .then((response) => response.data);
  };

  deleteShop = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/shops/${id}`)
      .then((response) => response.data);
  };

  updateShop = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/shops/${id}`, form)
      .then((response) => response.data);
  };

  // pages

  getPages = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/pages`)
      .then((response) => response.data);
  };

  getSinglePage = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/pages/${id}`)
      .then((response) => response.data);
  };

  createPage = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/pages`, form)
      .then((response) => response.data);
  };

  updatePage = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/pages/${id}`, form)
      .then((response) => response.data);
  };

  uploadPageBanner = async <G>(
    id: string,
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/pages/${id}`, form, params)
      .then((response) => response.data);
  };

  deletePageBannerImage = async <G>(id: string) => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/pages/${id}`)
      .then((response) => response.data);
  };

  // settings

  getSettings = async <G>() => {
    return await axiosInstance
      .get<G>(`/dashboard/settings`)
      .then((response) => response.data);
  };

  createSetting = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>(`/dashboard/settings`, form)
      .then((response) => response.data);
  };

  updateSetting = async <G, P>(form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/settings`, form)
      .then((response) => response.data);
  };

  uploadSettingMainLogo = async <G>(
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/settings/logo`, form, params)
      .then((response) => response.data);
  };

  uploadSettingFooterLogo = async <G>(
    form: FormData,
    params: AxiosRequestConfig
  ) => {
    return await axiosInstance
      .post<G>(`/dashboard/static/images/settings/footer-logo`, form, params)
      .then((response) => response.data);
  };

  deleteSettingMainLogo = async <G>() => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/pages/logo`)
      .then((response) => response.data);
  };

  deleteSettingFooterLogo = async <G>() => {
    return await axiosInstance
      .delete<G>(`/dashboard/static/images/pages/footer-logo`)
      .then((response) => response.data);
  };

  // Orders

  getOrders = async <G, P>(form: P, params: AxiosRequestConfig) => {
    return await axiosInstance
      .post<G>(`/dashboard/orders`, form, params)
      .then((response) => response.data);
  };

  getSingleOrder = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/orders/${id}`)
      .then((response) => response.data);
  };

  updateOrderStatus = async <G, P>(id: string, form: P) => {
    return await axiosInstance
      .patch<G>(`/dashboard/orders/${id}/proceed`, form)
      .then((response) => response.data);
  };

  // users

  getUsers = async <G>(params: AxiosRequestConfig) => {
    return await axiosInstance
      .get<G>(`/dashboard/user`, params)
      .then((response) => response.data);
  };

  getSingleUser = async <G>(id: string) => {
    return await axiosInstance
      .get<G>(`/dashboard/users/${id}`)
      .then((response) => response.data);
  };

  blockUser = async <G>(id: string) => {
    return await axiosInstance
      .patch<G>(`/dashboard/users/${id}/ban`)
      .then((response) => response.data);
  };

  unblockUser = async <G, P>(id: string) => {
    return await axiosInstance
      .patch<G>(`/dashboard/users/${id}/unblock`)
      .then((response) => response.data);
  };
}

export default APIClient;
