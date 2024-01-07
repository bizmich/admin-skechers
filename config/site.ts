import { Navigation } from '@/types';

export const siteConfig = {
  name: 'Website name',
  navigation: [
    {
      id: '0',
      name: 'Главная',
      href: '/',
      icon: 'home',
      tag: 'region',
      disabled: false,
    },
    {
      id: '2',
      name: 'Магазин',
      href: '/store',
      icon: 'store',
      tag: 'store',
      disabled: false,
    },
    {
      id: '3',
      name: 'Студенты',
      href: '/students',
      icon: 'users',
      tag: 'student',
      disabled: false,
    },
    {
      id: '4',
      name: 'Группы',
      href: '/groups',
      icon: 'group',
      tag: 'group',
      disabled: false,
    },
    {
      id: '5',
      name: 'Расписание',
      href: '/schedule',
      icon: 'schedule',
      tag: 'schedule',
      disabled: false,
    },
    {
      id: '8',
      name: 'Касса',
      href: '/payment',
      icon: 'cash',
      tag: 'payment',
      disabled: false,
    },
    {
      id: '7',
      name: 'Обратная связь',
      href: '/feedback',
      icon: 'edit',
      tag: 'staff feedback',
      disabled: false,
    },
    {
      id: '11',
      name: 'Инвентарь',
      href: '/inventories',
      icon: 'edit',
      tag: 'inventory',
      disabled: false,
    },
    {
      id: '9',
      name: 'Уведомление',
      href: '/notifications',
      icon: 'notification',
      tag: 'notif',
      disabled: false,
    },
  ] satisfies Navigation[],
  settings: {
    id: '10',
    name: 'Настройки',
    href: '/settings',
    icon: 'settings',
    tag: 'course' || 'region',
    disabled: false,
    current: false,
    children: [
      { name: 'Регионы', href: '/config/regions', tag: 'region' },
      { name: 'Филиалы', href: '/config/branches', tag: 'branch' },
      { name: 'Аудитории', href: '/config/classes', tag: 'auditorium' },
      { name: 'Предметы', href: '/config/fields', tag: 'field' },
      { name: 'Курсы', href: '/config/course-level', tag: 'course' },
      { name: 'Роли', href: '/config/roles', tag: 'role' },
      {
        name: 'Категории инвентаря',
        href: '/config/categories',
        tag: 'inventory category',
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
  tag: string;
}
