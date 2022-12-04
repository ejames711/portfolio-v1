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
        delay: .2,
        duration: 1,
      }
    }
  }

export default function Intro() {
    return(
        <motion.div id='intro' className='flex flex-col items-center w-3/4 gap-4 mt-20 text-center justify-evenly md:flex-row' initial="hidden" animate="visible" variants={fadeIn}>
            <div className='flex flex-col justify-center text-white md:gap-4'>
                <h1 className='text-4xl md:text-8xl font-ubuntu' >Ethan Palas</h1>
                <h2 className='font-sans text-2xl md:ml-20 md:text-5xl' >Freelance Developer</h2>
            </div>
            <Image src={'/assets/computer-white.svg'} width={250} height={250}/>
        </motion.div>
    )
}