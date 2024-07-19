import { useEffect, useState } from 'react';
import ImageBookCard from './ImageBookCard';
import api from '../utils/api';

function BookCard() {
    const [dataBook, setDataBook] = useState([]);

    useEffect(() => {
        api.getBukuHome().then(response => {
            const mappedData = response.map(book => ({
                imageSrc: book.url_sampul,
                title: book.judul,
                id: book.id
            }));
            setDataBook(mappedData);
        }).catch(error => {
            console.error('Error fetching books:', error);
        });
    }, []);

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
