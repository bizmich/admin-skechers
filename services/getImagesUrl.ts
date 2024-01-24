const _url = process.env.NEXT_PUBLIC_API_BASE_URL;
class ImagesUrls {
  getProductImages = (image: string) => {
    return `${_url}/dashboard/static/images/product-galleries/${image}`;
  };

  getCategoryImages = (image: string) => {
    return `${_url}/dashboard/static/images/category-image/${image}`;
  };
}

export const getImageUrl = new ImagesUrls();
