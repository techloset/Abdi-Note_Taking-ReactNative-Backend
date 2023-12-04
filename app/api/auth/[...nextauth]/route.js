import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/user";
import { compare } from "bcrypt";
import connectMongoDB from "../../../../lib/mongodb";

const authOptions = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
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

        if (isPasswordCorrect) {
          return user;
        }
        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
});

export { authOptions as GET, authOptions as POST };
