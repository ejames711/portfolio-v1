import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const fadeIn = {
    hidden: {
      scale: .8,
      y: "-100vh"
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: .4
      }
    },
    exit: {
      scale: .8,
      opacity: 0
    }
  }

export default function Terminal(){

  const [isInitialized, setIsInitialized] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  setTimeout(() => {
    setIsInitialized(true)
  },4500)
  
  setTimeout(() => {
    setIsComplete(true)
  },5000)

    return(
      <AnimatePresence
        initial={false}
      >
      {!isComplete &&
        <motion.div className={"gap-5 rounded-lg h-2/5 w-3/5 lg:w-2/5 bg-black text-white drop-shadow-[0_5px_10px_rgb(60,60,60,0.25)]"} initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
            <p>EthOS $[Version 1.0]</p>
            <div className='inline-block'>
                <p className='typed-out text-xl md:text-3xl'>{isInitialized ? "Complete..." : "Initializing EthOS..."}</p>
            </div>
        </motion.div>
      }
      </AnimatePresence>
    )
}