import BangunDatar from "../assets/Challenges/BangunDatar.png";
import BangunRuang from "../assets/Challenges/BangunRuang.png";
import LuasDanVolume from "../assets/Challenges/LuasDanVolume.png";
import ImageCard from "./ImageCard";

function ChallengeCard() {
    const datas = {
        imageSrc: [BangunDatar, BangunRuang, LuasDanVolume],
        title: ["Bangun Datar", "Bangun Ruang", "Luas Dan Volume"],
        description: ["10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat"],
        deadline: ["15 Oktober 2023", "15 Oktober 2023", "15 Oktober 2023"],
        exp: [15, 15, 15]
    }

    return(
        <>
            <div className="mx-44 flex justify-between">
                {datas.imageSrc.map((image, index) => (
                    <ImageCard
                        key={index}
                        datas={{
                            type: 'quiz',
                            imageSrc: image,
                            title: datas.title[index],
                            description: datas.description[index],
                            exp: datas.exp[index],
                            deadline: datas.deadline[index]
                        }}
                    />
                ))}
            </div>
        </>
    )
} 

export default ChallengeCard;
