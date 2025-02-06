// next-auth.d.ts (create this file if it doesn't exist)
// import NextAuth, { DefaultSession } from "next-auth";
import { User as AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
    } & DefaultSession["user"];
  }

  interface User extends AdapterUser {
    role?: string;
  }
}
