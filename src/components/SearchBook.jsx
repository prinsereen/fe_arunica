import { useState, useEffect } from "react";
import ImageBookCard from "./ImageBookCard";
import SearchForm from "./SearchForm"; 
import api from "../utils/api";

function SearchBook() {
    const [query, setQuery] = useState("");
    const [dataBook, setDataBook] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getAllBuku().then(response => {
            const mappedData = response.map(book => ({
                imageSrc: book.url_sampul,
                title: book.judul,
                id: book.id
            }));
            setDataBook(mappedData);
            setIsLoading(false);
        }).catch(error => {
            console.error('Error fetching books:', error);
            setError(error);
            setIsLoading(false);
        });
    }, []);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    const filteredBooks = dataBook.filter((book) => 
        book.title.toLowerCase().includes(query.toLowerCase())
    );

    if (isLoading) {
        return <p></p>;
    }

    if (error) {
        return <p>Error loading books: {error.message}</p>;
    }

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
