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
      
        <motion.div className="flex items-center justify-center z-10 gap-5 rounded-lg w-1/3 bg-black text-white" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
            <div className='inline-block'>
                <p className='h-1/2 typed-out text-4xl md:text-6xl'>Initialize EthOS...</p>
            </div>
        </motion.div>
      
    )
}