import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

const MyArtUnggah = () => {
    const datas = {
        placeholder: "Test"
    }
    return (
        <>
        <Navbar/>
        <SearchForm datas={datas}/>
        <Footer/>
        </>
    );
}

export default MyArtUnggah;
