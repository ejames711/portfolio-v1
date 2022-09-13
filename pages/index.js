import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '../components/Terminal'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro';
import Nav from '../components/Nav';

export default function Home() {

  const [isComplete, setIsComplete] = useState(false)

  setTimeout(() => {
    setIsComplete(true)
  },3000)

  const [background,setBackground] = useState(false)

    setTimeout(() => {
        setBackground(true)
      }, 3000)

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-black'>
      <Head>
        <title>Ethan Palas | Portfolio</title>
        <meta name="Portfolio website of Ethan Palas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video className={background ? "object-fill absolute w-full h-full" : "hidden"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" />
        <AnimatePresence>
          {!isComplete && <Terminal />}
          {isComplete && <Intro />}
        </AnimatePresence>
    </div>
  )
}
