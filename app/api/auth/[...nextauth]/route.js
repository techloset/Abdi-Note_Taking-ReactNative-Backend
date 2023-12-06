import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/user";
import { compare } from "bcrypt";
import connectMongoDB from "../../../../lib/mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        await connectMongoDB().catch((err) => {
          throw new Error(err);
        });
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) {
          throw new Error("Invalid credentials");
        }
        const isPasswordCorrect = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async jwt({ token, user, session }) {
  //     console.log("jwt callback", { session, user, token });
  //     return token;
  //   },
  //   async session({ session, user, token }) {
  //     console.log("session callback", { session, user, token });
  //     return session;
  //   },
  // },

  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/login",
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
