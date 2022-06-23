import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { handleAuth } from "@auth0/nextjs-auth0"

// const hndlAuth = () => handleAuth();
// export hndlAuth

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})