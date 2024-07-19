import { useState, useEffect } from "react";
import ImageComicCard from "./ImageComicCard";
import SearchForm from "./SearchForm"; 
import api from "../utils/api";

function SearchComic() {
    const [query, setQuery] = useState("");
    const [dataComic, setdataComic] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getVerifiedComic();
                setdataComic(response);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

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
                                id: comic.id,
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
