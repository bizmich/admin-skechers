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
      href: '#',
      subMenu: [
        {
          id: 'categories',
          name: 'Category',
          href: '/category',
        },
        {
          id: 'products',
          name: 'Товары',
          href: '/products',
        },
      ],
    },
    {
      id: '3',
      icon: 'pages',
      name: 'Страницы',
      href: '#',
      subMenu: [
        {
          id: 'brands',
          name: 'Бренды',
          href: '/brands',
        },
        {
          id: 'modern-technologies',
          name: 'Современные технологии',
          href: '/modern-technologies',
        },
        {
          id: 'our-technologies',
          name: 'Наши предложение',
          href: '/our-technologies',
        },
        {
          id: 'orders',
          name: 'Заказы',
          href: '/orders',
        },
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
          id: 'clients',
          name: 'Клиенты',
          href: '/clients',
        },
      ],
    },
    {
      id: '4',
      icon: 'user',
      name: 'Администраторы',
      href: '/administrator',
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
