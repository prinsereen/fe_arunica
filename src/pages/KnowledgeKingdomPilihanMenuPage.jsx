import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Kingdom from "../assets/HeroSection/Kingdom.png"
import HeloHeroSection from "../components/HeloHeroSection";
import KnowledeKindomPilihanMenu from "../components/KnowledeKindomPilihanMenu";

const KnowledeKingdomPilihanMenuPage = () => {
    const heroData = {
        colorType: 'yellow',
        textHero: 'Knowledge Kingdom',
        img: Kingdom,
        textHeloHero: 'Hai Penjelajah Ilmu! Selamat datang di Knowledge Kingdom, tempat eksplorasi pengetahuan tanpa batas! 🌍📚',
        path: '/knowledge'
    }
    return (
        <div>
            <Navbar/>
            <HeroSection data={heroData}/>
            <HeloHeroSection data={heroData}/>
            <KnowledeKindomPilihanMenu data={heroData}/>
            <Footer/>
        </div>
    );
}

export default KnowledeKingdomPilihanMenuPage;
