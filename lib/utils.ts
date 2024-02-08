import { type ClassValue, clsx } from 'clsx';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const getProductFilter = (data: any) => {
  const queries = { ...data };

  console.log('queries:', queries);

  for (const key of Object.keys(queries)) {
    if (queries[key]) {
      if (key !== 'active' && key !== 'keyword' && queries[key]) {
        queries[key] = queries[key].split(',');
      }

      if (key === 'active' && queries[key]) {
        if (queries[key] === 'all') {
          delete queries[key];
        } else {
          queries[key] = queries[key] === '1' ? true : false;
        }
      }

      if (key === 'sizeZero') {
        if (queries[key][0] === 'true') {
          queries[key] = true;
        } else {
          queries[key] = false;
        }
      }
    } else {
      delete queries[key];
    }
  }

  return queries;
};

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
