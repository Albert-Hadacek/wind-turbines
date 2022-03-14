import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginForm from './account/loginLayout'
import 'semantic-ui-css/semantic.min.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SPOWT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm></LoginForm>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
