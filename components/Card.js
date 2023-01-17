import Image from "next/image"
import Link from "next/link"

export default function Card() {
    return(
        <div className="flex flex-col justify-between items-center p-2 bg-gray-800 w-80 h-[500px] rounded text-gray-200">
            <div className="relative w-full h-40">
                <Image src={'/assets/pokemart-screen.png'} layout="fill" className="opacity-60"/>
            </div>
            <div className="flex flex-col gap-2 justify-evenly">
                <h1 className="text-2xl font-bold">Pokemart E-Commerce</h1>
                <p className="text-sm w-72">A fun mock up project of what a Pokemart online store might look like</p>
                <h2 className="font-bold">Technologies:</h2>
                <ul className="text-sm font-semibold ">
                    <li>Next.JS/React</li>
                    <li>Redux</li>
                    <li>Tailwind</li>
                    <li>PokeAPI</li>
                    <li>Nodemailer</li>
                    <li>Supabase</li>
                </ul>
                <p className="text-xs w-72 opacity-80">Manages cart state with Redux. Calls PokeAPI for card info. Uses Nodemailer and Next API route to send mock email receipt at checkout.</p>
            </div>
            <button className="h-8 font-semibold text-gray-300 bg-gray-900 border-2 border-black rounded w-28"><Link href={"https://pokemart-two.vercel.app/"}>Go To Demo</Link></button>
        </div>
    )
}