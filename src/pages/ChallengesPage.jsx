import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Target from "../assets/HeroSection/Target.png"
import HeloHeroSection from "../components/HeloHeroSection";
import ChooseMapel from "../components/ChooseMapel";

const ChallengesPage = () => {
    const heroData = {
        colorType: 'blue',
        textHero: 'Challenges',
        img: Target,
        textHeloHero: 'Halo Pahlawan Belajar! Selamat datang di Challenges, tempat di mana pengetahuanmu diuji. Siapakah yang akan menguasai Challenges hari ini? 🌟',
        path: '/challenges'
    }
    return (
        <div>
            <Navbar/>
            <HeroSection data={heroData}/>
            <HeloHeroSection data={heroData}/>
            <ChooseMapel data={heroData}/>
            <Footer/>
        </div>
    );
}

export default ChallengesPage;
