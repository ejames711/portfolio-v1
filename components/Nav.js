import Link from "next/link";
import ScrollTo from 'react-scroll-into-view'


export default function Nav() {
    return (
        <div className="absolute relative flex w-screen p-4 text-2xl font-bold text-white bg-[#070707] justify-evenly opacity-80">
            <ScrollTo selector="#intro" className="hover:cursor-pointer">
                Home
            </ScrollTo>
            <ScrollTo selector="#about" className="hover:cursor-pointer">
                About
            </ScrollTo>
            <ScrollTo selector="#projects" className="hover:cursor-pointer">
                Projects
            </ScrollTo>
        </div>
    )
}