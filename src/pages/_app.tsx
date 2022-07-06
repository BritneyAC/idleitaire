import '@/styles/css/globals.css'
import "@/styles/css/App.css"
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
