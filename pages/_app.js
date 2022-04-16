import '../styles/styles.css'
import 'semantic-ui-css/semantic.min.css'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (<SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>)
}

export default MyApp
