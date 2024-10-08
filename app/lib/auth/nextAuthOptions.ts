import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },

            async authorize(credentials, req) {
                const response = await fetch(`http://201.23.18.145:4000/session`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })

                const user = await response.json()

                if (user && response.ok) {
                    return user
                }
            },
        })
    ],
    pages: {
        signIn: "/login",
        newUser: "/signUp"
    },
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            session.user = token.user as any
            return session
        }
    }
}