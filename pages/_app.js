import '../styles/styles.css'
import 'semantic-ui-css/semantic.min.css'
import { SessionProvider } from "next-auth/react"
import {LoadingProvider} from '../context/LoadingContext'


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </SessionProvider>)
}

export default MyApp
