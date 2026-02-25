import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// TODO: Replace this with your actual database/medusa lookup logic
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        // Placeholder logic: Replace with actual database verification
        // e.g., const user = await db.query.users.findFirst(...)
        // const isValid = await bcrypt.compare(credentials.password, user.password)
        if (
          credentials.email === "admin@roqart.com" &&
          credentials.password === "password123"
        ) {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@roqart.com",
            role: "admin",
          };
        }
        
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role; // Safe casting until db schema is added
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as { role?: unknown }).role = token.role; // Safe casting until next-auth typing is augmented
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    // newUser: "/register"
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
