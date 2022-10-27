import Link from "next/link"
import Slideshow from "./Slideshow.js"

export default function About() {
    return(
        <div id="about" className="flex flex-col items-center justify-center w-screen h-screen mt-40 text-center text-white bg-black font-ubuntu" >
            <div className="z-10 flex flex-col items-center justify-center gap-2 p-10 rounded-lg lg:w-2/3 md:gap-8 opacity-80">
                <p className="sm:text-xl md:text-3xl">
                    Hello! My name is Ethan Palas. I&apos;m a self taught developer. My interests and hobbies include dApps, web development, and network automation. 
                    I am currently self employed, doing freelance development for multiple DAOs.
                </p>
                <h2 className="sm:text-2xl md:text-4xl">Technologies I currently work with:</h2>
                <Slideshow />
            </div>
        </div>
    )
}