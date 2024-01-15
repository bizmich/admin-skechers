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

  for (const key of Object.keys(queries)) {
    if (queries[key]) {
      if (key !== 'active' && queries[key]) {
        queries[key] = queries[key].split(',');
      }

      if (key === 'active' && queries[key]) {
        if (queries[key] === 'all') {
          delete queries[key];
        } else {
          queries[key] = queries[key] === '1' ? true : false;
        }
      }
    } else {
      delete queries[key];
    }
  }

  return queries;
};
