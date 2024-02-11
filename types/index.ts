import { Icons } from '@/components/icons';
import { EditBannerItems } from '@/lib/validations/banner-form-validation';
import { EditPagesItems } from '@/lib/validations/pages-form-validation';
import { EditSettingsItems } from '@/lib/validations/settings-form-validation';
import { EditShopsItems } from '@/lib/validations/shops-form-validation';
import { EditSliderItems } from '@/lib/validations/slider-form-validation';
import { EditVideoItems } from '@/lib/validations/video-form-validation';

export interface Navigation {
  id: string;
  icon: keyof typeof Icons;
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
  brend: { title: string; id: string };
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
  mainImage: boolean;
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
  imageUrl: null | string;
  sortOrder: number;
  title: string;
}

export interface Slider extends EditSliderItems {}
export interface Banner extends EditBannerItems {}
export interface Video extends EditVideoItems {}
export interface Shops extends EditShopsItems {}
export interface Pages extends EditPagesItems {}
export interface Settings extends EditSettingsItems {}

export interface SingleProduct extends Product {
  brendId: string;
}

export interface Orders {
  items: OrderItem[];
  total: number;
  take: number;
  skip: number;
}

export interface OrderItem {
  id: string;
  createdAt: string;
  orderNo: string;
  status: string;
  orderSum: string;
}

export interface SingleOrder {
  id: string;
  status: string;
  createdAt: string;
  orderNo: string;
  orderSum: string;
  user: SingleOrderUser;
  address: string;
  orderItems: SingleOrderItem[];
}

export interface SingleOrderUser {
  id: string;
  name: string;
}

export interface SingleOrderItem {
  id: string;
  productId: string;
  article: string;
  productTitle: string;
  productDescription: string;
  productBrend: string;
  productBrendId: string;
  productCategoryId: string;
  productCategory: string;
  productColorId: string;
  imageUrl: string;
  productColorName: string;
  soldPrice: string;
  productSizeId: string;
  productSize: string;
  quantity: number;
  amount: number;
}

export interface Users {
  id: string;
  name: string;
  role: string;
  active: boolean;
  phone: string;
  ordersQuantity: number;
}

export interface SingleUser extends Users {
  orders: UserOrders[];
}

export interface UserOrders {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  address?: string;
  orderNo: string;
  note: any;
  code: any;
  status: string;
  orderSum: string;
  deliveryPrice: string;
}
