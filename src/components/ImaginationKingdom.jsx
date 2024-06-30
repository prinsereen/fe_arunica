import Animasi from "../assets/ImaginationKingdom/ImaginationKingdom.png";
//import Tutor from "./Tutor";
import ComicCard from "./ComicCard";
import BookCard from "./BookCard";

function ImaginationKingdom() {
    return(
        <>
            <div className="w-full pt-6 px-44 h-38">
                <img src={Animasi} alt="header" />
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyArt</h1>
                <button className="rounded-xl p-2 my-2  text-white bg-[#1450A3] hover:bg-[#083475] active:bg-[#072f6b]">Lihat Lainnya</button>
            </div>
            <div>
                <ComicCard/>
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyLiterature</h1>
                <button className="rounded-xl p-2 my-2  text-white bg-[#1450A3] hover:bg-[#083475] active:bg-[#072f6b]">Lihat Lainnya</button>
            </div>
            <div>
                <BookCard/>
            </div>

        </>
    )
}

export default ImaginationKingdom;
