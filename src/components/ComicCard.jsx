import Molekul from "../assets/Comic/comic_1.png"
import Pancasila from "../assets/Comic/comic_2.png"
import Kejujuran from "../assets/Comic/Comic_3_Kejujuran.jpg"
import Kemerdekaan from "../assets/Comic/comic_4_kemerdekaan.jpg"
import ImageComicCard from "./ImageComicCard";

function ComicCard () {

    const dataComic = {
        imageSrc: [Molekul, Pancasila, Kejujuran, Kemerdekaan],
        title: ["Molekul dan Atom", "Nilai Pancasila", "Kejujuran", "Kemerdekaan"],
        author: ["Dono Sudjatmiko", "Wedyodiningrat", "Mangkunegoro", "Alexander"],
    }

    return(
        <>
            <div className="mx-44 grid grid-cols-4 gap-2 justify-between">
                {dataComic.imageSrc.map((image, index) => (
                    <ImageComicCard
                        key={index}
                        datas={{
                            imageSrc: image,
                            title: dataComic.title[index],
                            author: dataComic.author[index]
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default ComicCard;