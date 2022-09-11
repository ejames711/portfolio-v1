import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '../components/Terminal'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Layout from '../layouts/default-layout';


export default function Home() {

  const [isComplete, setIsComplete] = useState(false)

  setTimeout(() => {
    setIsComplete(true)
  },5000)

  return (
    <Layout>
      <Head>
        <title>Ethan Palas | Portfolio</title>
        <meta name="Portfolio website of Ethan Palas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <AnimatePresence>
          {!isComplete && <Terminal />}
          {isComplete && <Intro />}
        </AnimatePresence>
    </Layout>
  )
}
