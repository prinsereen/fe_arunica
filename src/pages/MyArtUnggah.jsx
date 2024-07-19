import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import ArtInputForm from "../components/ArtInputForm";
import ArtList from "../components/ArtList";
import PersonalAssistance from "../components/personalAssistance";

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
        <PersonalAssistance/>
        <Footer/>
        </>
    );
}

export default MyArtUnggah;
