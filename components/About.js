import Link from "next/link"
import Slideshow from "./Slideshow.js"

export default function About() {
    return(
        <div id="about" className="flex flex-col items-center justify-center w-screen h-screen text-center text-white bg-black font-ubuntu">
            {/* <video className={"object-fill absolute w-full h-full"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" /> */}
            {/* <div className="z-10 flex gap-10 justify-self-start opacity-80 md:gap-20">
                <Link href='/'><a className="text-3xl text-white md:text-5xl lg:text-7xl font-ubuntu">Home</a></Link>
                <Link href='/projects'><a className="text-3xl text-white md:text-5xl lg:text-7xl font-ubuntu">Projects</a></Link>
            </div> */}
            <div className="z-10 flex flex-col items-center justify-center gap-2 p-10 rounded-lg lg:w-2/3 md:gap-8 opacity-80">
                <p className="sm:text-xl md:text-3xl">
                    I&apos;m a self taught developer with interests specifically in dApps, web development, and network automation. 
                    I am currently self employed, doing freelance development for multiple DAOs.
                </p>
                <h2 className="sm:text-2xl md:text-4xl">Technologies I currently work with:</h2>
                <Slideshow />
            </div>
        </div>
    )
}