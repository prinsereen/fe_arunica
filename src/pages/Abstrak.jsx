import { Link } from "react-router-dom";
import Bumi from "../assets/Books/Bumi.png";
import MyLiterature from "../assets/PilihanImaginationKingdom/MyLiterature.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const Abstrak = () => {
    const data = { 
        id: 'aaaaaa',
        imageSrc: Bumi, 
        title: "Bumi - Tere Liye", 
        abstrak:'Novel ini mengisahkan tentang petualangan 3 remaja yang berusia 15 tahun bernama Raib, Ali dan Seli. Namun mereka bukanlah remaja biasa, melainkan remaja yang memiliki kekuatan khusus seperti Raib yang bisa menghilang, Seli yang bisa mengeluarkan petir dan Ali seorang pelajar yang sangat jenius. Petualangan menjelajah dunia paralel mereka dimulai dari sini, dunia paralel yang pertama mereka jelajahi adalah Klan Bulan. Tetapi mereka tidak hanya sekedar menjelajah saja, melainkan mereka harus bertarung untuk menyelamatkan dunia paralel dari orang-orang jahat. Orang-orang jahat tersebut yakni bernama Tamus. Tamus memiliki ambisi untuk menguasai dunia, oleh karena itu ia berusaha untuk membebaskan seorang pangeran yang sangat kuat dan memiliki ambisi yang sama. Pangeran tersebut sedang dipenjara yang disebut "Penjara Bayangan dibawah Bayangan". Pangeran tersebut bernama Si Tanpa Mahkota.'
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
                    <div className=" bg-[#EFD595] p-2">
                        <img src={data.imageSrc} alt="img" />
                    </div>
                </div>
                <div className="col-span-3">
                    <h1 className="text-center text-2xl font-bold">{data.title}</h1>
                    <p className="text-sm text-justify mt-4">{data.abstrak}</p>
                </div>
            </div>
                <div className="mx-44  grid grid-cols-5">
                    <div className="col-start-4 flex justify-center items-center">
                        <Link to={`/imagination/MyLiterature/book/${data.id}`} className="text-white text-center  w-36 p-1 rounded-lg bg-[#1450A3] hover:bg-blue-900 border">Baca</Link>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default Abstrak;
