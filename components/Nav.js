import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-col gap-12 md:gap-24 items-center justify-center text-white text-4xl md:text-8xl font-roboto">
            <Link href="/" ><a>HOME</a></Link>
            <Link href="/projects" ><a >PROJECTS</a></Link>
            <Link href="/about" ><a>ABOUT</a></Link>
        </div>
    )
}