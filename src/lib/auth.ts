import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        if (
          credentials?.email === process.env.ADMIN_EMAIL ||
          credentials?.email === "admin@aatmanirbhar.org"
        ) {
          if (credentials?.password === process.env.ADMIN_PASSWORD || credentials?.password === "seedchange") {
            return { id: "admin", name: "Admin User", email: credentials?.email || "admin@aatmanirbhar.org" };
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
};

export const handler = NextAuth(authOptions);
