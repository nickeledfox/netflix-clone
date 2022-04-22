import { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="android-chrome-192x192"
        sizes="192x192"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="android-chrome-512x512"
        sizes="512x512"
        href="/images/android-chrome-512x512"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
