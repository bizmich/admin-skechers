import axiosInstance from './axiosInstance';

class APIClient {
  getCategories<G>() {
    axiosInstance
      .get<G>('/dashboard/categories')
      .then((response) => response.data);
  }
}

export default APIClient;
