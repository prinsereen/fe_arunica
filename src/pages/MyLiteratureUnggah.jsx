import Footer from "../components/Footer";
import LiteratureList from "../components/LiteratureList";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";


const MyLiteratureUnggah = () => {
    const datas = {
        placeholder: "Cari buku yang pernah kamu baca"
    }
    return (
        <>
        <Navbar/>
        <SearchForm datas={datas}/>
        <LiteratureList/>
        <Footer/>
        </>
    );
}

export default MyLiteratureUnggah;
