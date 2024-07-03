import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChooseMapel from "../components/ChooseMapel";
import { useParams } from "react-router-dom";
import MyBank from "../assets/PilihanKnowledgeKingdom/MyBank.png"
import MyQuick from "../assets/PilihanKnowledgeKingdom/MyQuick.png"
import MyRead from "../assets/PilihanKnowledgeKingdom/MyRead.png"
import MyTutor from "../assets/PilihanKnowledgeKingdom/MyTutor.png"

const KnowledgeKingdomPage = () => {
    const { tipe } = useParams();
    let image;
    if (tipe === 'MyBank'){
        image = MyBank
    }if (tipe === 'MyQuick'){
        image = MyQuick
    }if (tipe === 'MyRead'){
        image = MyRead
    }if (tipe === 'MyTutor'){
        image = MyTutor
    }

    const heroData = {
        colorType: 'blue',
        textHero: tipe,
        img: image,
        path: `/knowledge/${tipe}`
    };
    return (
        <div>
            <Navbar/>
            <HeroSection data={heroData}/>
            <ChooseMapel data={heroData}/>
            <Footer/>
        </div>
    );
}

export default KnowledgeKingdomPage;
