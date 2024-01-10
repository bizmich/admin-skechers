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
  brend: Brend;
  title: string;
  description: string;
  newProduct: boolean;
  hit: boolean;
  viewedQuantity: number;
  soldQuantity: number;
  active: boolean;
  colors: Color[];
  imageUrl: string;
}

export interface Brend {
  id: string;
  title: string;
}

export interface Color {
  id: string;
  sortOrder: number;
  mainColor: boolean;
  imageUrl: string;
  price: string;
  salePrice: string;
}
