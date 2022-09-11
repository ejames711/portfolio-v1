import Navbar from "../components/Navbar";
import { useState } from "react";

const fadeIn = {
    hidden: {
      scale: .8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .2
      }
    }
  }

export default function Layout({children}){

    const [background,setBackground] = useState(false)

    setTimeout(() => {
        setBackground(true)
      }, 5000)

    return(
        <>
            <video className={background ? "object-fill absolute w-screen h-screen -z-10" : "hidden"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" initial="hidden" animate="visible" variants={fadeIn}></video>
            {/* <Navbar/> */}
            <div className='flex flex-col h-screen w-screen justify-center items-center'>
                {children}
            </div>
        </>
    )
}