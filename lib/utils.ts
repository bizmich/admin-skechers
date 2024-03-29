import { type ClassValue, clsx } from 'clsx';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { parseISO, format } from 'date-fns';

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

      if (key === 'sizeZero' || key === 'archived') {
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
  if (!str) return null;
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function formatDate(dateString: string) {
  if (!dateString) return;
  const outputFormat = 'dd.MM.yyyy HH:mm';

  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, outputFormat);

  return formattedDate;
}

export const getStatus = (status: string) => {
  switch (status) {
    case 'NEW_ORDER':
      return 'Новый заказ';
    case 'PROCESSING':
      return 'В процессе';
    case 'DELIVERED':
      return 'Доставлен';
    case 'REJECTED':
      return 'Отклонен';

    default:
      return 'Не указан';
  }
};

export const getRole = (status: string) => {
  switch (status) {
    case 'MODERATOR':
      return 'Модератор';
    case 'ADMINISTRATOR':
      return 'Администратор';
    case 'CUSTOMER':
      return 'Клиент';
    default:
      return 'Не указан';
  }
};
