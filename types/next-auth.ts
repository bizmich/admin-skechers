import { User } from '@/config/auth';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Data {
    user: User;
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: Data;
  }
}

export interface Permission {
  id: number;
  name: string;
}
