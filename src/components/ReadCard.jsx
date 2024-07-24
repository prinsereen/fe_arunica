import Matematika from "../assets/KnowledgeKingdom/Matematika.png";
import IpaFotosintesis from "../assets/KnowledgeKingdom/IPAFotosintesis.png";
import Ips from "../assets/KnowledgeKingdom/IPS.png";
import ImageCard from "./ImageCard";

function ReadCard () {

    const dataRead = {
        imageSrc: [Ips, IpaFotosintesis, Matematika],
        title: ["IPS", "IPA", "Matematika"],
        deadline: ["15 Oktober 2023", "15 Oktober 2023", "15 Oktober 2023"],
    }

    return(
        <>
            <div className="mx-44 flex justify-between">
                {dataRead.imageSrc.map((image, index) => (
                    <ImageCard
                        key={index}
                        datas={{
                            type: 'read',
                            imageSrc: image,
                            title: dataRead.title[index],
                            deadline: dataRead.deadline[index]
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default ReadCard;