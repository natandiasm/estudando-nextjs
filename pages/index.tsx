import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Natan Dias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Natan Dias 
        </h1>

        <p className={styles.description}>
          Testando next.js
        </p>

        <p>
          <code className={styles.code}>github.com/natandiasm</code>
        </p>
      </main>

    </>
  )
}
