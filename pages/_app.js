import { useEffect } from 'react'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize app functionality
    const initializeApp = () => {
      // This will be handled in individual components now
    }

    initializeApp()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  )
} 