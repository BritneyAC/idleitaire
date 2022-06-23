import '@/styles/globals.css'
import "@/styles/App.css"
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { withTRPC } from "@trpc/next"
import type { AppRouter } from "@/backend/router"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}


export default withTRPC<AppRouter>({
  config({ ctx }){
    const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/trpc`
    : "http://localhost:3000/api/trpc"

    return { url }
  },
  ssr: true
})(MyApp)