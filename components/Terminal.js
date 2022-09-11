import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const fadeIn = {
    hidden: {
      scale: .8,
      opacity: 0,
    },
    visible: {
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

  setTimeout(() => {
    setIsInitialized(true)
  },4500)
  

    return(
      
        <motion.div className="gap-5 rounded-lg h-2/5 w-3/5 lg:w-2/5 bg-black text-white drop-shadow-xl" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
            <p>EthOS $[Version 1.0]</p>
            <div className='inline-block'>
                <p className='typed-out text-xl md:text-3xl'>{isInitialized ? "Complete..." : "Initializing EthOS..."}</p>
            </div>
        </motion.div>
      
    )
}