import Kejujuran from "../assets/Comic/Comic_3_Kejujuran.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Comic = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center mx-44 mt-8">
                <img className="w-1/2" src={Kejujuran} alt="comic" />
            </div>
            <Footer/>
        </div>
    );
}

export default Comic;
