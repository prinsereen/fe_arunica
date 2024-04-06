import BangunDatar from "../assets/Challenges/BangunDatar.png";
import BangunRuang from "../assets/Challenges/BangunRuang.png";
import LuasDanVolume from "../assets/Challenges/LuasDanVolume.png";
import ImageCard from "./ImageCard";

function ChallengeCard() {
    const datas = {
        imageSrc: [BangunDatar, BangunRuang, LuasDanVolume],
        title: ["BangunDatar", "BangunRuang", "LuasDanVolume"],
        description: ["10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat"],
        exp: [15, 15, 15]
    }

    return(
        <>
            <div className="mx-44 flex justify-between">
                {datas.imageSrc.map((image, index) => (
                    <ImageCard
                        key={index}
                        datas={{
                            imageSrc: image,
                            title: datas.title[index],
                            description: datas.description[index],
                            exp: datas.exp[index]
                        }}
                    />
                ))}
            </div>
        </>
    )
} 

export default ChallengeCard;
