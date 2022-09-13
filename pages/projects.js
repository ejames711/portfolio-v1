
export default function Projects(){
    return(
        <div className="flex h-screen w-screen items-center justify-center">
            <video className={"object-fill absolute w-full h-full"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" />
            <div className="flex flex-col justify-center items-center z-10 h-1/2 w-2/3 gap-8 bg-black opacity-80 rounded-lg p-10 text-white text-center" >
                <h1 className="text-8xl">Projects coming soon...</h1>
            </div>
        </div>
    )
}