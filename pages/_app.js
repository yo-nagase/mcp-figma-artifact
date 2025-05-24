import { useEffect } from 'react'
import Head from 'next/head'
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400&family=Roboto:wght@900&family=SF+Pro+Text:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 