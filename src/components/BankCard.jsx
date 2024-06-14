import IpaFotosintesis from "../assets/KnowledgeKingdom/IPAFotosintesis.png";
import ImageCard from "./ImageCard";
import Kalor from "../assets/KnowledgeKingdom/Kalor.png";
import KingdomAnimalia from "../assets/KnowledgeKingdom/KingdomAnimalia.png"

function BankCard () {

    const dataBank = {
        imageSrc: [Kalor, IpaFotosintesis, KingdomAnimalia],
        title: ["Kalor", "Fotosintesis", "Kingdom Animalia"],
        description: ["10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat"],
        deadline: ["15 Oktober 2023", "15 Oktober 2023", "15 Oktober 2023"],    
    }

    return(
        <>
            <div className="mx-44 flex justify-between">
                {dataBank.imageSrc.map((image, index) => (
                    <ImageCard
                        key={index}
                        datas={{
                            imageSrc: image,
                            title: dataBank.title[index],
                            deadline: dataBank.deadline[index],
                            description: dataBank.description[index],
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default BankCard;