import Bintang from "../assets/Books/Bintang.png"
import Bumi from "../assets/Books/Bumi.png"
import Komet from "../assets/Books/Komet.png"
import Lampu from "../assets/Books/Lampu.png"
import Selena from "../assets/Books/Selena.png"
import ImageBookCard from "./ImageBookCard";

function BookCard () {

    const dataComic = {
        imageSrc: [Bumi, Bintang, Komet, Lampu, Selena],
        title: ["Bumi - Tere Liye", "Bintang - Tere Liye", "Komet - Tere Liye", "Lampu - Tere Liye", "Selena - Tere Liye"],
    }

    return(
        <>
            <div className="mx-44 grid grid-cols-5 gap-2 justify-between">
                {dataComic.imageSrc.map((image, index) => (
                    <ImageBookCard
                        key={index}
                        datas={{
                            imageSrc: image,
                            title: dataComic.title[index],
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default BookCard;