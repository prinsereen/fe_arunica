import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MyLiterature from "../assets/PilihanImaginationKingdom/MyLiterature.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import api from "../utils/api";
import PersonalAssistance from "../components/personalAssistance";

const Abstrak = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getBukuId({ id })
            .then(response => {
                const mappedData = {
                    id: response.id,
                    imageSrc: response.url_sampul,
                    title: response.judul,
                    abstrak: response.abstrak
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
        <>
            <Navbar/>
            <div className="mx-44 mt-8 flex justify-center items-center">
                <img className="mx-4 w-12 h-12" src={MyLiterature} alt="image" />
                <h2 className="text-2xl font-bold">MyLiterature</h2>
            </div>
            <div className="grid mx-44 mt-12 grid-cols-5">
                <div className="col-span-2 flex justify-center items-center">
                    <div className="bg-[#EFD595] p-2">
                        <img src={bookData.imageSrc} alt="img" />
                    </div>
                </div>
                <div className="col-span-3">
                    <h1 className="text-center text-2xl font-bold">{bookData.title}</h1>
                    <p className="text-sm text-justify mt-4">{bookData.abstrak}</p>
                </div>
            </div>
            <div className="mx-44 grid grid-cols-5">
                <div className="col-start-4 flex justify-center items-center">
                    <Link to={`/imagination/MyLiterature/book/${bookData.id}`} className="text-white text-center w-36 p-1 rounded-lg bg-[#1450A3] hover:bg-blue-900 border">Baca</Link>
                </div>
            </div>
            <PersonalAssistance/>
            <Footer/>
        </>
    );
}

export default Abstrak;
