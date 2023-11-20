import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Data {
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: { status: number; success: boolean; meta: any; data?: Data };
  }
}
