import { useState, useEffect } from "react";
import ImageComicCard from "./ImageComicCard";
import api from "../utils/api";

function ComicCard () {
    const [dataComic, setDataComic] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getComicHome();
                setDataComic(response);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="mx-44 grid grid-cols-4 gap-2 justify-between">
                {dataComic.map((comic) => (
                    <ImageComicCard
                        key={comic.id}
                        datas={{
                            imageSrc: comic.imageSrc,
                            title: comic.title,
                            author: comic.author,
                            id: comic.id
                        }}
                    />
                ))}
            </div>
        </>
    );
}

export default ComicCard;
