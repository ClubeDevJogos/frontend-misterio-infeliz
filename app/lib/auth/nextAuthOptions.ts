import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers"

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },

            async authorize(credentials) {
                const response = await fetch(`http://clubedevjogos.com.br:8080/session`, {
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

                //Gambiearra para setar o token e middleware utilizar
                cookies().set("token", user.token)

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
            session.user = token.user as { username: string; email: string; token: string };
            return session
        }
    }
}