import Link from "next/link"
import Slideshow from "../components/Slideshow"


export default function About(){
    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center text-white text-center bg-black font-ubuntu">
            <video className={"object-fill absolute w-full h-full"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" />
            <div className="flex justify-self-start opacity-80 z-10 gap-10 md:gap-20">
                <Link href='/'><a className="text-white text-3xl md:text-5xl lg:text-7xl font-ubuntu">Home</a></Link>
                <Link href='/projects'><a className="text-white text-3xl md:text-5xl lg:text-7xl font-ubuntu">Projects</a></Link>
            </div>
            <div className="flex flex-col justify-center items-center z-10 lg:w-2/3 gap-2 md:gap-8 bg-zinc-900 opacity-80 rounded-lg p-10">
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