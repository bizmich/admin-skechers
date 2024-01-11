export interface Category {
  [key: string]: Menu;
}

export interface Menu {
  name: string;
  href: string;
  id: string;
  parentId?: string;
  [key: string]: any;
}
export interface MenuItems {
  name: string;
  href: string;
  id: string;
  parentId: string;
  items: Menu[];
}
