import Card from "./Card";

export default function Projects(){
    return(
        <div id='projects' className="z-10 flex flex-col items-center justify-center w-full gap-8 p-10 mt-40 mb-20 text-center rounded-lg h-fit md:flex-row" >
            <Card />
            <div className="flex flex-col justify-center items-center p-2 bg-gray-800 w-80 h-[500px] rounded text-gray-200 opacity-60 text-2xl font-bold">
                More Projects Coming Soon...
            </div>
        </div>
    )
}