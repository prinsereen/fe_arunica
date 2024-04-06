import Header from "../assets/Challenges/Header.png"
import ChallengeCard from "./ChallengeCard";

function Challenge (){
    return (
        <>
            <div className="w-full px-44 h-38">
                <img src={Header} alt="header" />
            </div>
            <div className="flex justify-between items-center px-44 py-2">
                <h1 className="text-2xl font-bold">MyQuiz</h1>
                <button className="rounded-xl p-2 text-white bg-[#1450A3]">Lihat Lainnya</button>
            </div>
            <div>
                <ChallengeCard/>
            </div>
        </>
    )
}

export default Challenge;