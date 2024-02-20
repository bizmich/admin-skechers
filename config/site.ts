import { Navigation } from '@/types';

export const siteConfig = {
  name: 'Website name',
  navigation: [
    {
      id: '0',
      name: 'Главная',
      href: '/',
      icon: 'home',
    },
    {
      id: '2',
      icon: 'store',
      name: 'Магазин',

      subMenu: [
        {
          id: 'categories',
          name: 'Категории',
          href: '/store/category',
        },
        {
          id: 'products',
          name: 'Товары',
          href: '/store/products',
        },
        {
          id: 'brands',
          name: 'Бренды',
          href: '/brands',
        },
        {
          id: 'technologies',
          name: 'Технологии',
          href: '/technologies',
        },
        {
          id: 'orders',
          name: 'Заказы',
          href: '/orders',
        },
        {
          id: 'users',
          name: 'Клиенты',
          href: '/users',
        },
      ],
    },
    {
      id: '3',
      icon: 'pages',
      name: 'Сайт',

      subMenu: [
        {
          id: 'sliders',
          name: 'Слайдер',
          href: '/sliders',
        },
        {
          id: 'banners',
          name: 'Баннеры',
          href: '/banners',
        },

        {
          id: 'video',
          name: 'Видео',
          href: '/videos',
        },
        {
          id: 'pages',
          name: 'Страницы',
          href: '/pages',
        },
        {
          id: 'shops',
          name: 'Магазины',
          href: '/shops',
        },
      ],
    },
  ] satisfies Navigation[],
  settings: {
    id: '10',
    icon: 'settings',
    name: 'Настройки',
    href: '/settings',
    current: false,
    children: [
      {
        name: 'Категории инвентаря',
        href: '/config/categories',
      },
    ],
  } satisfies SiteSetting,
};

interface SiteSetting extends Navigation {
  current: boolean;
  children: SiteSettingChildren[];
}

interface SiteSettingChildren {
  name: string;
  href: string;
}
