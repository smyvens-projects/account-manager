import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize(credentials) {
                const { email, password } = credentials as { email: string; password: string }
                const emailRegex =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                if (!emailRegex.test(email)) {
                    throw new Error("Invalid email!")
                }
                // at least: 1 lowercase, 1 uppercase, 1 number and 8 digits
                else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password)) {
                    throw new Error("Invalid password!")
                }

                return {
                    id: new Date().toString(),
                }
            },
        }),
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
