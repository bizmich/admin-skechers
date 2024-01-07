import axiosInstance from '@/services/axiosInstance';
import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export interface User {
  id: string;
  name: string;
  phone: string;
  active: boolean;
  role: string;
}

export interface Data {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) return null;

        try {
          const dataFromDb = await axiosInstance
            .post('https://365trends.tj/api/dashboard/auth/signin', credentials)
            .then((response) => {
              console.log('response:', response);

              return response;
            });

          if (dataFromDb.status === 201) {
            console.log('dataFromDb:', dataFromDb.data);
            return dataFromDb.data;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error('Произошла ошибка аутентификации');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as Data;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV !== 'development',
};
