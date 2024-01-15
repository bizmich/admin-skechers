export interface Navigation {
  id: string;
  icon: string;
  name: string;
  href?: string;
  subMenu?: NavigationSubmenu[];
}

interface NavigationSubmenu {
  id: string;
  name: string;
  href: string;
}

export interface FetchResponse<P> {
  items: P;
  total: number;
  take: number;
  skip: number;
  page: number;
}

export interface Product {
  id: string;
  article: string;
  groupMySklad: string;
  typeMySklad: string;
  sortOrder: number;
  brendId: string;
  title: string;
  description: string;
  newProduct: boolean;
  hit: boolean;
  viewedQuantity: number;
  soldQuantity: number;
  active: boolean;
  colors: Color[];
  categoryIds: string[];
  technologies: Technologies[];
  imageUrl: string;
  categories: { name: string; href: string; id: string; active: boolean }[];
}

export interface Color {
  id: string;
  sortOrder: number;
  mainColor: boolean;
  imageUrl: string;
  price: string;
  salePrice: string;
  active: boolean;
  sizes: Size[];
  galleries: Gallery[];
  name: string;
}

export interface Size {
  id: string;
  sortOrder: number;
  value: string;
  quantity: number;
}

export interface Gallery {
  id: string;
  sortOrder: number;
  imageUrl: string;
}

export interface Brands {
  active: boolean;
  bannerUrl: null | string;
  id: string;
  logoUrl: null | string;
  sortOrder: number;
  title: string;
}
export interface Technologies {
  active: boolean;
  id: string;
  logoUrl: null | string;
  sortOrder: number;
  title: string;
}
