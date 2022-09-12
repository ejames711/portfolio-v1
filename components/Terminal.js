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

    return(
      
        <motion.div className="gap-5 rounded-lg h-1/3 md:h-1/2 w-3/4 lg:w-2/5 bg-black text-white drop-shadow-[0_10px_10px_rgb(200,200,200,0.25)]" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
            <p>EthOS $[Version 1.0]</p>
            <div className='inline-block'>
                <p className='typed-out text-xl md:text-6xl'>Initializing EthOS...</p>
            </div>
        </motion.div>
      
    )
}