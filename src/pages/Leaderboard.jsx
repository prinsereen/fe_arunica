import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeaderboardHead from "../components/LeaderboardHead";
import Podium from "../components/Podium";
import Warlord from "../assets/Leaderboard/Warlord.png";
import LeaderboardList from "../components/LeaderboardList";
import Knight from "../assets/Leaderboard/Knight_2.png";
import Guardian from "../assets/Leaderboard/Knight_4.png";
import api from '../utils/api';

const Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const leaderboardData = await api.getLeaderboard();
                setData(leaderboardData);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <LeaderboardHead />
            {data?.length > 0 && (
                <>
                    <Podium datas={data.slice(0, 3)} />
                    {/* Warlord */}
                    {data.length > 3 && (
                        <div className="mt-8 mx-60 flex items-center">
                            <img className="w-16 h-16" src={Warlord} alt="warlord" />
                            <h1 className="ml-4 font-bold text-2xl text-[#F94C10]">Warlord</h1>
                        </div>
                    )}
                    {data.length > 3 && data.slice(3, 7).map((item, index) => (
                        <LeaderboardList key={index} datas={item} index={index + 3} />
                    ))}

                    {/* Knight */}
                    {data.length > 7 && (
                        <div className="mt-2 mx-60 flex items-center">
                            <img className="w-16 h-16" src={Knight} alt="knight" />
                            <h1 className="ml-4 font-bold text-2xl text-[#F94C10]">Knight</h1>
                        </div>
                    )}
                    {data.length > 7 && data.slice(7, 12).map((item, index) => (
                        <LeaderboardList key={index} datas={item} index={index + 7} />
                    ))}

                    {/* Guardian */}
                    {data.length > 11 && (
                        <div className="mt-2 mx-60 flex items-center">
                            <img className="w-16 h-16" src={Guardian} alt="Guardian" />
                            <h1 className="ml-4 font-bold text-2xl text-[#F94C10]">Guardian</h1>
                        </div>
                    )}
                    {data.length > 11 && data.slice(12, 22).map((item, index) => (
                        <LeaderboardList key={index} datas={item} index={index + 12} />
                    ))}
                </>
            )}
            <Footer />
        </>
    );
}

export default Leaderboard;
