import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { cookies } from 'next/headers';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function authorizedFetch(
  url: string,
  options: RequestOptions = {}
): Promise<Response> {
  const session = await getServerSession(authConfig);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: session ? `Bearer ${session?.user.accessToken}` : '',
    ...options.headers,
  };

  const fetchOptions: RequestOptions = {
    ...options,
    headers,
  };

  return fetch(url, fetchOptions);
}

export default authorizedFetch;
