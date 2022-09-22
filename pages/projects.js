import Link from "next/link";

export default function Projects(){
    return(
        <div className="flex flex-col h-screen w-screen items-center justify-center">
            <div className="flex justify-self-start opacity-80 z-10 gap-20">
                <Link href='/'><a className="text-white text-3xl md:text-7xl font-ubuntu">Home</a></Link>
                <Link href='/about'><a className="text-white text-3xl md:text-7xl font-ubuntu">About</a></Link>
            </div>
            <video className={"object-fill absolute w-full h-full"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" />
            <div className="flex flex-col justify-center items-center z-10 h-1/2 w-2/3 gap-8 bg-zinc-900 opacity-80 rounded-lg p-10 text-white text-center" >
                <h1 className="text-6xl md:text-8xl">Projects coming soon...</h1>
            </div>
        </div>
    )
}