import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ImaginationKingdom from "../assets/HeroSection/ImaginationKingdom.png"
import HeloHeroSection from "../components/HeloHeroSection";
import ImaginationKindomPilihanMenu from "../components/ImaginationKingdomPilihan";

const ImaginationKingdomPage = () => {
    const heroData = {
        colorType: 'blue',
        textHero: 'Imagination Kingdom',
        img: ImaginationKingdom,
        textHeloHero: 'Halo Penguasa Imajinasi! Selamat datang di Imagination Kingdom, tempat magis di mana cerita dan kreativitas berkumpul. 🏰🌈',
        path: '/imagination'
    }
    return (
        <div>
            <Navbar/>
            <HeroSection data={heroData}/>
            <HeloHeroSection data={heroData}/>
            <ImaginationKindomPilihanMenu data={heroData}/>
            <Footer/>
        </div>
    );
}

export default ImaginationKingdomPage;
