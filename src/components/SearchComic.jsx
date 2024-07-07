import { useState } from "react";
import Molekul from "../assets/Comic/comic_1.png";
import Pancasila from "../assets/Comic/comic_2.png";
import Kejujuran from "../assets/Comic/Comic_3_Kejujuran.jpg";
import Kemerdekaan from "../assets/Comic/comic_4_kemerdekaan.jpg";
import ImageComicCard from "./ImageComicCard";
import SearchForm from "./SearchForm"; 

function SearchComic() {
    const [query, setQuery] = useState("");

    const dataComic = [
        { imageSrc: Molekul, title: "Molekul dan Atom", author: "Dono Sudjatmiko" },
        { imageSrc: Pancasila, title: "Nilai Pancasila", author: "Wedyodiningrat" },
        { imageSrc: Kejujuran, title: "Kejujuran", author: "Mangkunegoro" },
        { imageSrc: Kemerdekaan, title: "Kemerdekaan", author: "Alexander" },
        { imageSrc: Molekul, title: "Molekul dan Atom", author: "Dono Sudjatmiko" },
        { imageSrc: Pancasila, title: "Nilai Pancasila", author: "Wedyodiningrat" },
        { imageSrc: Kejujuran, title: "Kejujuran", author: "Mangkunegoro" },
        { imageSrc: Kemerdekaan, title: "Kemerdekaan", author: "Alexander" },
    ];

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    const filteredComics = dataComic.filter((comic) => 
        comic.title.toLowerCase().includes(query.toLowerCase()) ||
        comic.author.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <SearchForm datas={{ placeholder: "Cari komik..." }} onSearch={handleSearch} />
            <div className="mx-44 mt-6 grid grid-cols-4 gap-2 justify-between">
                {filteredComics.length > 0 ? (
                    filteredComics.map((comic, index) => (
                        <ImageComicCard
                            key={index}
                            datas={{
                                imageSrc: comic.imageSrc,
                                title: comic.title,
                                author: comic.author,
                            }}
                        />
                    ))
                ) : (
                    <p>Tidak ada komik yang ditemukan</p>
                )}
            </div>
        </>
    );
}

export default SearchComic;
