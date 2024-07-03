import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Information from "../assets/HeroSection/Information.png"
import HeloHeroSection from "../components/HeloHeroSection";
import InformationPilihan from "../components/InformationPilihan";

const InformationPage = () => {
    const heroData = {
        colorType: 'blue',
        textHero: 'Information',
        img: Information,
        textHeloHero: 'Hei! Siap untuk berpetualang? Temukan info lomba seru di sini! 🚀🏆',
        path: '/information'
    }
    return (
        <div>
            <Navbar/>
            <HeroSection data={heroData}/>
            <HeloHeroSection data={heroData}/>
            <InformationPilihan data={heroData}/>
            <Footer/>
        </div>
    );
}

export default InformationPage;
