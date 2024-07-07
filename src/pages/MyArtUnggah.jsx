import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import ArtInputForm from "../components/ArtInputForm";
import ArtList from "../components/ArtList";

const MyArtUnggah = () => {
    const datas = {
        placeholder: "Temukan karya terbaik ...."
    }
    return (
        <>
        <Navbar/>
        <SearchForm datas={datas}/>
        <ArtInputForm/>
        <ArtList/>
        <Footer/>
        </>
    );
}

export default MyArtUnggah;
