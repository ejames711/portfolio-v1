import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

let i = 0

export default function Slideshow() {
    const imgNames = ['react','nextjs','python','solidity','vercel']
    const [imgSrc,setImgSrc] = useState(`/assets/img/${imgNames[0]}.svg`);

    function forwardClick() {
        if(i < imgNames.length - 1){
            i += 1
        }
        setImgSrc(`/assets/img/${imgNames[i]}.svg`)
    }

    function backClick() {
        if(i > 0){
            i -= 1
        }
        setImgSrc(`/assets/img/${imgNames[i]}.svg`)
    }

    return(
        <div className="flex flex-col">
            <AnimatePresence>
                <div className="flex flex-col justify-center items-center">
                <motion.img
                    className="h-32 w-32 md:h-44 md:w-44 max-w-sm max-h-sm"
                    key={imgSrc}
                    src={imgSrc}
                    initial={{ opacity: 0, x: '-25vw' }}
                    animate={{ opacity: 1, x:0 }}
                    exit={{ opacity: 0 }}
                />
                </div>
            </AnimatePresence>
            <div className="flex flex-row justify-center items-center gap-8 md:gap-20 mt-4">
                <button onClick={backClick} className="flex justify-center text-white font-ubuntu text-xl"><img className="w-10 h-10" src='/assets/img/button-reverse.svg'/></button>
                <button onClick={forwardClick} className="flex justify-center text-white font-ubuntu text-xl"><img className="w-10 h-10" src='/assets/img/button.svg'/></button>
            </div>
        </div>
    )
}