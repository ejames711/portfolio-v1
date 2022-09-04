import Head from 'next/head'
import Image from 'next/image'
import Terminal from '../components/Terminal'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <video className='object-fill absolute w-screen h-screen' autoPlay muted loop src='/assets/video.mp4' type="video/mp4"></video>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <Head>
          <title>Ethan Palas | Portfolio</title>
          <meta name="Portfolio website of Ethan Palas" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Terminal />
      </div>
    </>
  )
}
