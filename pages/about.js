
export default function About(){
    return (
        <div className="flex h-screen w-screen items-center justify-center text-white text-center font-ubuntu">
            <video className={"object-fill absolute w-full h-full"} autoPlay muted loop src='/assets/video.mp4' type="video/mp4" />
            <div className="flex flex-col justify-center items-center z-10 w-2/3 gap-8 bg-black opacity-80 rounded-lg p-10">
                <p className="text-3xl">
                    I&apos;m a self taught developer with interests specifically in blockchain, network automation, and game development. 
                    I am currently self employed, doing freelance development for multiple DAOs.
                </p>
                <h2 className="text-4xl">Technologies I work with:</h2>
                <ul className="text-4xl">
                    <li>NextJS</li>
                    <li>Vercel</li>
                    <li>Solidity</li>
                    <li>Godot Engine</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
    )
}