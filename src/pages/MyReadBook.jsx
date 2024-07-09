import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyReadBook = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="my-4 flex justify-center items-center text-2xl font-bold">Bumi - Tere Liye</h1>
            <div className="mx-44 flex flex-col justify-center items-center">
                <object width="100%" height="500px" className="border rounded-b-lg shadow-lg" data="https://firebasestorage.googleapis.com/v0/b/visionary-9f018.appspot.com/o/717.%20%5BENG%5D%20MANIPULATION%20(DARK%20PSYCHOLOGY%20TO%20MANIPULATE%20AND%20CONTROL%20PEOPLE)%20-%20ARTHUR%20HORN.pdf?alt=media&token=e4415e72-9e72-467b-b9d6-5a20f5075379" type="application/pdf" />
            </div>
            <Footer/>
        </div>
    );
}

export default MyReadBook;
