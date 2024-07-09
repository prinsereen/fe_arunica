import maskot from "../assets/StudentAuth/maskot.png"
import Leaderboard from "../assets/Leaderboard/Leaderboard.png"

const LeaderboardHead = () => {
    return (
        <>
            <div className="flex mt-8 justify-center items-center">
                <img className="w-[60px] pr-4" src={Leaderboard} alt="image" />
                <h2 className="text-2xl font-bold">Leaderboard</h2>
            </div>
            <div className="mx-44 mt-4 flex">
                <img className="ml-24 w-[120px]" src={maskot} alt="maskot" />
                <div className="flex items-center">
                    <p className=" ml-4 p-2 rounded-b-lg bg-[#91C8E4] rounded-r-lg border mr-20">Hai Juara! Selamat datang di puncak kejayaan, tempat para pembelajar terbaik berkumpul. Mari lihat siapa yang memimpin di leaderboard hari ini! 🏆</p>   
                </div>
            </div>
        </>
    );
}

export default LeaderboardHead;
