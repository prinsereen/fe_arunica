import { useState } from "react";
import Bintang from "../assets/Books/Bintang.png";
import Bumi from "../assets/Books/Bumi.png";
import Komet from "../assets/Books/Komet.png";
import Lampu from "../assets/Books/Lampu.png";
import Selena from "../assets/Books/Selena.png";
import ImageBookCard from "./ImageBookCard";
import SearchForm from "./SearchForm"; // Import komponen SearchForm

function SearchBook() {
    const [query, setQuery] = useState("");

    const dataBook = [
        { imageSrc: Bumi, title: "Bumi - Tere Liye", id:'aaaaaaaa'},
        { imageSrc: Bintang, title: "Bintang - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Komet, title: "Komet - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Lampu, title: "Lampu - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Selena, title: "Selena - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Bumi, title: "Bumi - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Bintang, title: "Bintang - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Komet, title: "Komet - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Lampu, title: "Lampu - Tere Liye" , id:'aaaaaaaa'},
        { imageSrc: Selena, title: "Selena - Tere Liye" , id:'aaaaaaaa'},
    ];

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    const filteredBooks = dataBook.filter((book) => 
        book.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <SearchForm datas={{ placeholder: "Cari buku..." }} onSearch={handleSearch} />
            <div className="mx-44 mt-6 grid grid-cols-5 gap-2 justify-between">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <ImageBookCard
                            key={index}
                            datas={{
                                imageSrc: book.imageSrc,
                                title: book.title,
                                id: book.id
                            }}
                        />
                    ))
                ) : (
                    <p>Tidak ada buku yang ditemukan</p>
                )}
            </div>
        </>
    );
}

export default SearchBook;