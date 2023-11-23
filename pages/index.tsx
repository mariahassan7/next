import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Educative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.main_body}>
            <Navbar />
            <div className={styles.banner}>
              <h1> Welcome to Educative's Next.js App</h1>
            </div> 
            <div className={styles.next_properties}>
                  <div className={styles.image}>
                            <Image
                              src="/Next.png"
                              alt="Educative's App"
                              width={700}
                              height={300}                     
                            />
                  </div>
            </div>
      </div>   
    </>
  )
}

