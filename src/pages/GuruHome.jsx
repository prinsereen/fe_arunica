import GuruNavbar from "../components/GuruNavbar";
import Footer from "../components/Footer";
import ChooseMapel from "../components/ChooseMapel";
import { useParams } from "react-router-dom";

const GuruHome = () => {
    const {kelas} = useParams();
    console.log(kelas)

    const datas = {
        path: `/guru/soal/${kelas}`
    }

    return (
        <div>
            <GuruNavbar/>
            <ChooseMapel data={datas}/>
            <Footer/>
        </div>
    );
}

export default GuruHome;
