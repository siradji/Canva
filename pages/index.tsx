import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello from canva</h1>
      </main>

      <footer className={styles.footer}>
        <p>Hello world</p>
      </footer>
    </>
  )
}
