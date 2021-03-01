import { AppProps } from 'next/dist/next-server/lib/router/router'

import MainLayout from 'layout/containers/Mainlayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps}: AppProps) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}
export default MyApp
