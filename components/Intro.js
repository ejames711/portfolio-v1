import {motion} from 'framer-motion'
import Image from 'next/image'
import Nav from './Nav'

const fadeIn = {
    hidden: {
      scale: .6,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: .8,
      transition: {
        delay: .2
      }
    }
  }

export default function Intro() {
    return(
        <motion.div className='flex flex-col md:flex-row items-center justify-evenly text-center md:text-justify h-1/2 md:h-2/3 w-3/4 md:w-screen lg:w-5/6 bg-zinc-900' initial="hidden" animate="visible" variants={fadeIn}>
            <div className='flex flex-col gap-4 justify-center text-white'>
                <h1 className='text-4xl md:text-8xl font-ubuntu' >Ethan Palas</h1>
                <h2 className='text-2xl md:text-6xl xl:text-7xl font-sans' >Freelance Developer</h2>
            </div>
            <Nav />
        </motion.div>
    )
}