import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../utils/api';

const ViewBookMyRead = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await api.tambahNilaiIps();
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const bookData = {
        title: "IPS",
        url_buku: "https://firebasestorage.googleapis.com/v0/b/visionary-9f018.appspot.com/o/IPS_BS_KLS_VII_Rev.pdf?alt=media&token=4cb39e6a-833f-4eb2-8c94-2862c04c9a8d"
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
            </div>
            <Footer />
        </div>
    );
}

export default ViewBookMyRead;
