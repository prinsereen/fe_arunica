import Animasi from "../assets/KnowledgeKingdom/animasi.png";
import BankCard from "./BankCard";
import ReadCard from "./ReadCard";
//import Tutor from "./Tutor";


function KnowledgeKingdom() {
    return(
        <>
            <div className="w-full pt-6 px-44 h-38">
                <img src={Animasi} alt="header" />
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyRead</h1>
                <button className="rounded-xl p-2 text-white bg-[#1450A3]">Lihat Lainnya</button>
            </div>
            <div>
                <ReadCard/>
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyBank</h1>
                <button className="rounded-xl p-2 text-white bg-[#1450A3]">Lihat Lainnya</button>
            </div>
            <div>
                <BankCard/>
            </div>
{/*             <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyTutor</h1>
                <button className="rounded-xl p-2 text-white bg-[#1450A3]">Lihat Lainnya</button>
            </div>
            <div>
                <Tutor/>
            </div> */}  
        </>
    )
}

export default KnowledgeKingdom;
