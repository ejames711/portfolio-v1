import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '../components/Terminal'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro';
import Nav from '../components/Nav';

const fadeIn = {
  hidden: {
    scale: .8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .2
    }
  }
}

export default function Home() {

  const [isComplete, setIsComplete] = useState(false)

  setTimeout(() => {
    setIsComplete(true)
  },4000)

  const [background,setBackground] = useState(false)

    setTimeout(() => {
        setBackground(true)
      }, 4000)

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-zinc-800'>
      <Head>
        <title>Ethan Palas | Portfolio</title>
        <meta name="Portfolio website of Ethan Palas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video className={background ? "object-fill absolute w-full h-full" : "hidden"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" initial="hidden" animate="visible" variants={fadeIn} />
        <AnimatePresence>
          {!isComplete && <Terminal />}
          {isComplete && <Intro />}
        </AnimatePresence>
    </div>
  )
}
