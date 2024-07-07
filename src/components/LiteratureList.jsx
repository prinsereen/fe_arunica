import Bintang from "../assets/Books/Bintang.png"
import Bumi from "../assets/Books/Bumi.png"
import Komet from "../assets/Books/Komet.png"
import Lampu from "../assets/Books/Lampu.png"
import Selena from "../assets/Books/Selena.png"
import LiteratureHistory from "./LiteratureHistoryCard"


const LiteratureList = () => {
    const datas = [
        { img: Bumi, judul: 'Bumi - Tere Liye', halaman: '1-2', idDetail: 'asjbhaujsajns' },
        { img: Bintang, judul: 'Bintang - Tere Liye', halaman: '1-2', idDetail: 'asjbhaujsajns' },
        { img: Komet, judul: 'Komet - Tere Liye', halaman: '1-2', idDetail: 'asjbhaujsajns' },
        { img: Lampu, judul: 'Lampu - Tere Liye', halaman: '1-2', idDetail: 'asjbhaujsajns' },
        { img: Selena, judul: 'Selena - Tere Liye', halaman: '1-2', idDetail: 'asjbhaujsajns' },
    ];

    return (
        <div className="mx-64 mt-12 ">
            <div className="grid pb-2 border-b-2 grid-cols-3">
                <h2 className="font-bold flex justify-center items-center">Judul</h2>
                <h2 className="font-bold flex justify-center items-center">Halaman Yang Dibaca</h2>
                <h2 className="font-bold flex justify-center items-center">Detail</h2>
            </div>
            <div className=' overflow-y-auto max-h-96 '>
            {datas.map((data, index) => (
                <LiteratureHistory key={index} datas={data} />
            ))}
            </div>
        </div>
    );
};

export default LiteratureList;
