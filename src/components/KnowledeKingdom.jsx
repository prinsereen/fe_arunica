import Animasi from "../assets/KnowledgeKingdom/animasi.png";
import BankCard from "./BankCard";
import ReadCard from "./ReadCard";
import Tutor from "./Tutor";
import Quick from "./Quick";
import { Link } from "react-router-dom";


function KnowledgeKingdom() {
    return(
        <>
            <div className="w-full pt-6 px-44 h-38">
                <img src={Animasi} alt="header" />
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyRead</h1>
                <Link to={"/knowledge/MyRead"} className="rounded-xl p-2 my-2 text-white bg-[#1450A3] hover:bg-[#083475] active:bg-[#072f6b] ">Lihat Lainnya</Link>
            </div>
            <div>
                <ReadCard/>
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyBank</h1>
                <Link to={"/knowledge/MyBank"} className="rounded-xl p-2 my-2 text-white bg-[#1450A3] hover:bg-[#083475] active:bg-[#072f6b]">Lihat Lainnya</Link>
            </div>
            <div>
                <BankCard/>
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyTutor</h1>
                <Link to={"/knowledge/MyTutor"} className="rounded-xl p-2 my-2 text-white bg-[#1450A3] hover:bg-[#083475] active:bg-[#072f6b]">Lihat Lainnya</Link>
            </div>
            <div>
                <Tutor/>
            </div>  
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyQuick</h1>
                <Link to={"/knowledge/MyQuick"} className="rounded-xl p-2 my-2 text-white bg-[#1450A3] hover:bg-[#083475] active:bg-[#072f6b] ">Lihat Lainnya</Link>
            </div>
            <div>
                <Quick/>
            </div>  
        </>
    )
}

export default KnowledgeKingdom;
