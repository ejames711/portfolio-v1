import Image from "next/image"

export default function Navbar() {
    return(
        <nav className="flex fixed justify-between items-center w-screen h-16 bg-black opacity-70 font-ubuntu">
            <h1 className="text-white text-xl ml-4">Palace Solutions LLC</h1>
            <div className="flex text-white text-2xl gap-4 mr-4">
                <a>Home</a>
                <a>About</a>
                <a>Projects</a>
            </div>
        </nav>
    )
}