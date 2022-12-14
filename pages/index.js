import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from './Landing'
import Login from './login'
import Container from '@mui/material/Container';
import Banner from '../components/Banner'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flivain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Container maxWidth="lg">
          <Landing />
          {/* <Login /> */}
        </Container>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
