import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";


const Comic = () => {
    const { id } = useParams();
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const response = await api.getComicById({ id });
                setImage(response.url_comic); 
            } catch (error) {
                console.error("Failed to fetch comic:", error);
            }
        };

        fetchComic();
    }, [id]);

    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center mx-44 mt-8">
                <img className="w-1/2" src={image} alt="comic" />
            </div>
            <Footer/>
        </div>
    );
}

export default Comic;
