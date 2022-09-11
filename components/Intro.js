import {motion} from 'framer-motion'
import Image from 'next/image'

const dropIn = {
    hidden: {
        y: "-110vh",
    },
    visible: {
        y: "0",
        transition: {
            delay: 0.4,
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    }
  }


export default function Intro({complete}) {
    return(
        <div className='flex justify-evenly w-2/3'>
            <div className='flex flex-col'>
                <motion.h1 className='text-white text-9xl font-ubuntu' initial="hidden" animate="visible" variants={dropIn}>Ethan Palas</motion.h1>
                <motion.h2 className='text-white text-7xl font-sans' initial="hidden" animate="visible" variants={dropIn}>Freelance Developer</motion.h2>
            </div>
        </div>
    )
}