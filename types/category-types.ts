export interface Category {
  women: Women;
  men: Men;
  kids: Kids;
  sale: Sale;
}

export interface Women {
  name: string;
  href: string;
  id: string;
  shoes: Shoes;
  clothes: Clothes;
}

export interface Shoes {
  name: string;
  href: string;
  id: string;
  items: Item[];
}

export interface Item {
  name: string;
  href: string;
  id: string;
}

export interface Clothes {
  name: string;
  href: string;
  id: string;
  items: Item2[];
}

export interface Item2 {
  name: string;
  href: string;
  id: string;
}

export interface Men {
  name: string;
  href: string;
  id: string;
  shoes: Shoes2;
  clothes: Clothes2;
}

export interface Shoes2 {
  name: string;
  href: string;
  id: string;
  items: Item3[];
}

export interface Item3 {
  name: string;
  href: string;
  id: string;
}

export interface Clothes2 {
  name: string;
  href: string;
  id: string;
  items: Item4[];
}

export interface Item4 {
  name: string;
  href: string;
  id: string;
}

export interface Kids {
  name: string;
  href: string;
  id: string;
  shoes: Shoes3;
  clothes: Clothes3;
}

export interface Shoes3 {
  name: string;
  href: string;
  id: string;
  items: Item5[];
}

export interface Item5 {
  name: string;
  href: string;
  id: string;
}

export interface Clothes3 {
  name: string;
  href: string;
  id: string;
  items: Item6[];
}

export interface Item6 {
  name: string;
  href: string;
  id: string;
}

export interface Sale {
  name: string;
  href: string;
  id: string;
  men: Men2;
  women: Women2;
}

export interface Men2 {
  name: string;
  href: string;
  id: string;
  items: Item7[];
}

export interface Item7 {
  name: string;
  href: string;
  id: string;
}

export interface Women2 {
  name: string;
  href: string;
  id: string;
  items: Item8[];
}

export interface Item8 {
  name: string;
  href: string;
  id: string;
}
