import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        updateAge: 60 * 60, // 1 hour
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                return {
                    ...token,
                    accessToken: account.access_token,
                }
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                accessToken: token.accessToken,
            }
        },
    },
    pages: {
        signIn: "/account/authentication/login",
        newUser: "/account/register",
    },
    // adapter: PrismaAdapter(prismaClient),
    debug: process.env.NODE_ENV !== "production",
})
