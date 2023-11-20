import axiosInstance from "@/services/axiosInstance";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export interface User {
  status: number;
  success: boolean;
  meta: any;
  data: Data;
}

export interface Data {
  accessToken: string;
  refreshToken: string;
}

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        phone: { label: "Phone", type: "tel", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials, req) {
        if (!credentials?.phone || !credentials.password) return null;
        try {
          const dataFromDb = await axiosInstance
            .post("login/", credentials)
            .then((response) => {
              console.log("response:", response);

              return response;
            });

          if (dataFromDb.status === 200) {
            console.log("book", dataFromDb.data);

            return dataFromDb.data;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error("Произошла ошибка аутентификации");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as User;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "development",
};
