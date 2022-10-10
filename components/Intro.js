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
        <motion.div id='intro' className='flex flex-col items-center w-3/4 text-center md:flex-row justify-evenly md:text-justify h-1/2 md:h-2/3 md:w-screen lg:w-5/6' initial="hidden" animate="visible" variants={fadeIn}>
            <div className='flex flex-col justify-center w-full h-full text-white md:gap-4'>
                <h1 className='text-4xl md:text-8xl font-ubuntu' >Ethan Palas</h1>
                <h2 className='ml-20 font-sans text-2xl md:text-6xl xl:text-6xl' >Freelance Developer</h2>
            </div>
            <motion.div className='flex items-center justify-center w-full h-full' initial={{y: -10}} animate={{y: 10}} transition={{type: 'spring', stiffness: 10, repeat: Infinity, repeatType: 'reverse'}}>
              <img src='/assets/img/eth.svg' className='w-full h-full'/>
            </motion.div>
        </motion.div>
    )
}