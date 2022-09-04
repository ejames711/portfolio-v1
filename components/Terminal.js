import { motion } from 'framer-motion';

const dropIn = {
    hidden: {
        y: "-100vh",
    },
    visible: {
        y: "0",
        transition: {
            delay: 0.5,
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    }
  }

export default function Terminal(){
    return(
        <motion.div className="flex flex-col rounded-lg h-2/5 w-4/5 bg-black text-white drop-shadow-[0_5px_10px_rgb(200,200,200,0.25)]" initial="hidden" animate="visible" variants={dropIn}>
            <div>
            <div className='inline-block'>
                <p className='typed-out text-xl md:text-3xl'>Initializing EthOS...</p>
            </div>
            <div className='inline-block'>
                <p className='typed-out-second text-xl md:text-3xl'>C:\User\: Welcome!</p>
            </div>
            </div>
        </motion.div>
    )
}