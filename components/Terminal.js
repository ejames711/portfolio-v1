import { motion} from 'framer-motion';
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
      
        <motion.div className="z-10 flex items-center justify-center w-full h-full overflow-hidden text-white bg-black rounded-lg" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
            <div className='inline-block'>
                <p className='text-4xl h-1/2 typed-out md:text-6xl'>Initialize EthOS...</p>
          </div>
        </motion.div>
      
    )
}