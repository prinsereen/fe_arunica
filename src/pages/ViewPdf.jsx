import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../utils/api';
import { Link } from "react-router-dom";

const MyReadBook = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getBukuId({ id })
            .then(response => {
                const mappedData = {
                    title: response.judul,
                    url_buku: response.url_buku
                };
                setBookData(mappedData);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <p></p>;
    }

    if (error) {
        return <p>Error loading book: {error.message}</p>;
    }

    return (
        <div>
            <Navbar />
            <h1 className="my-4 flex justify-center items-center text-2xl font-bold">{bookData.title}</h1>
            <div className="mx-44 flex flex-col justify-center items-center">
                <object
                    width="100%"
                    height="500px"
                    className="border rounded-b-lg shadow-lg"
                    data={bookData.url_buku}
                    type="application/pdf"
                />
                <Link to={`/imagination/MyLiterature/book/ringkasan/${id}`} className="text-white mt-4 text-center  w-36 p-1 rounded-lg bg-[#1450A3] hover:bg-blue-900 border">Buat Ringkasan</Link>
            </div>
            <Footer />
        </div>
    );
}

export default MyReadBook;
