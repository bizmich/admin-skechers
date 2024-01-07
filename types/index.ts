export interface Navigation {
  id: string;
  icon: string;
  name: string;
  href: string;
  subMenu?: NavigationSubmenu[];
}

interface NavigationSubmenu {
  id: string;
  name: string;
  href: string;
}
