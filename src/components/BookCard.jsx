import Bintang from "../assets/Books/Bintang.png"
import Bumi from "../assets/Books/Bumi.png"
import Komet from "../assets/Books/Komet.png"
import Lampu from "../assets/Books/Lampu.png"
import Selena from "../assets/Books/Selena.png"
import ImageBookCard from "./ImageBookCard";

function BookCard() {
    const dataBook = [
        {
            imageSrc: Bumi,
            title: "Bumi - Tere Liye",
            id: 'aaaa'
        },
        {
            imageSrc: Bintang,
            title: "Bintang - Tere Liye",
            id: 'bbbb'
        },
        {
            imageSrc: Komet,
            title: "Komet - Tere Liye",
            id: 'cccc'
        },
        {
            imageSrc: Lampu,
            title: "Lampu - Tere Liye",
            id: 'dddd'
        },
        {
            imageSrc: Selena,
            title: "Selena - Tere Liye",
            id: 'eeee'
        }
    ];

    return (
        <>
            <div className="mx-44 grid grid-cols-5 gap-2 justify-between">
                {dataBook.map((book, index) => (
                    <ImageBookCard
                        key={index}
                        datas={{
                            imageSrc: book.imageSrc,
                            title: book.title,
                            id: book.id
                        }}
                    />
                ))}
            </div>
        </>
    );
}

export default BookCard;
