import Molekul from "../assets/Comic/comic_1.png";
import Pancasila from "../assets/Comic/comic_2.png";
import Kejujuran from "../assets/Comic/Comic_3_Kejujuran.jpg";
import Kemerdekaan from "../assets/Comic/comic_4_kemerdekaan.jpg";
import ArtHistory from "./ArtHistoryCard";

const ArtList = () => {
    const datas = [
        { img: Molekul, judul: 'Molekul dan Atom', unggahDate: '28 Januari 2024', status: 'Ditolak' },
        { img: Pancasila, judul: 'Nilai Pancasila', unggahDate: '28 Januari 2024', status: 'Disetujui' },
        { img: Kejujuran, judul: 'Kejujuran', unggahDate: '28 Januari 2024', status: 'Proses Verifikasi' },
        { img: Kemerdekaan, judul: 'Kemerdekaan', unggahDate: '28 Januari 2024', status: 'Ditolak' },
        { img: Molekul, judul: 'Molekul dan Atom', unggahDate: '28 Januari 2024', status: 'Ditolak' },
        { img: Pancasila, judul: 'Nilai Pancasila', unggahDate: '28 Januari 2024', status: 'Disetujui' },
        { img: Kejujuran, judul: 'Kejujuran', unggahDate: '28 Januari 2024', status: 'Proses Verifikasi' },
        { img: Kemerdekaan, judul: 'Kemerdekaan', unggahDate: '28 Januari 2024', status: 'Ditolak' }
    ];

    return (
        <div className="mx-64 mt-12 ">
            <div className="grid pb-2 border-b-2 grid-cols-3">
                <h2 className="font-bold flex justify-center items-center">Judul</h2>
                <h2 className="font-bold flex justify-center items-center">Tanggal Unggah</h2>
                <h2 className="font-bold flex justify-center items-center">Status</h2>
            </div>
            <div className=' overflow-y-auto max-h-96 '>
            {datas.map((data, index) => (
                <ArtHistory key={index} datas={data} />
            ))}
            </div>
        </div>
    );
};

export default ArtList;
