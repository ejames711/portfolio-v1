import Head from 'next/head'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Terminal from '../components/Terminal'
import Intro from '../components/Intro';
import Nav from '../components/Nav';
import About from "../components/About"
import Projects from '../components/Projects';


export default function Home() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [isComplete, setIsComplete] = useState(false)

  setTimeout(() => {
    setIsComplete(true)
  },3000)

  const [background,setBackground] = useState(false)

    setTimeout(() => {
        setBackground(true)
      }, 3000)

  return (
    <div className='flex flex-col items-center justify-between w-screen h-screen overflow-x-hidden bg-black'>
      <Head>
        <title>Ethan Palas | Portfolio</title>
        <meta name="Portfolio website of Ethan Palas" />
        <link rel="icon" href="/assets/computer-white.svg" />
      </Head>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className={background ? "absolute w-full h-full" : "hidden"}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ABD9FF",
          },
          links: {
            color: "#ABD9FF",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
        <AnimatePresence>
          {!isComplete && <Terminal />}
          {isComplete && <Nav />}
          {isComplete && <Intro />}
          {isComplete && <About />}
          {isComplete && <Projects />}
        </AnimatePresence>
    </div>
  )
}
