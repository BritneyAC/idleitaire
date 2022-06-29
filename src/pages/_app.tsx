import '@/styles/globals.css'
import "@/styles/App.css"
import type { AppProps } from 'next/app'
// import { SessionProvider } from 'next-auth/react'
// import { withTRPC } from "@trpc/next"
// import type { AppRouter } from "@/backend/router"

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}


// export default withTRPC<AppRouter>({
//   config({ ctx }){
//     const url = process.env.NETLIFY_URL
//     ? `https://${process.env.NETLIFY_URL}/api/trpc`
//     : "http://localhost:3000/api/trpc"

//     return { url }
//   },
//   ssr: true
// })(MyApp)
