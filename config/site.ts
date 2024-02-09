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
          name: 'Современные технологии',
          href: '/technologies',
        },
        {
          id: 'orders',
          name: 'Заказы',
          href: '/orders',
        },
        {
          id: 'clients',
          name: 'Клиенты',
          href: '/clients',
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
    {
      id: '4',
      icon: 'user',
      name: 'Администраторы',
      href: '/administrators',
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
