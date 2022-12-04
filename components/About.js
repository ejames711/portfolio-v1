import Link from "next/link"
import Image from "next/image"
import Slideshow from "./Slideshow.js"

export default function About() {
    return(
        <div id="about" className="flex flex-col items-center justify-center w-screen h-screen gap-20 mt-32 text-center text-white bg-black font-ubuntu" >
            <div className="flex gap-8">
                <Link href={'https://bitbucket.org/ethan-palas/'}>
                    <Image src={"/assets/img/bitbucket.svg"} height={50} width={50} className='hover:cursor-pointer' />
                </Link>
                <Link href={'https://www.linkedin.com/in/ethan-palas-b9b3a417a/'}>
                    <Image src={'/assets/img/linkedin.svg'} height={50} width={50} className='hover:cursor-pointer' />
                </Link>
            </div>
            <div className="z-10 flex flex-col items-center justify-center gap-20 p-10 rounded-lg lg:w-2/3 opacity-80">
                <p className="sm:text-xl md:text-3xl">
                    Hello! My name is Ethan Palas. I&apos;m a self taught developer with interests in dApps, web development, and game development. 
                    I&apos;m currently self employed, doing freelance work for multiple DAOs.
                </p>
                <h2 className="sm:text-2xl md:text-4xl">Technologies I currently work with:</h2>
                <Slideshow />
            </div>
        </div>
    )
}