import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GambarLomba from "../assets/InformationPilihan/Lomba.png";
import LombaCard from "../components/LombaCard";
import opsi from "../assets/logolomba/logoopsi.png";
import fls2n from "../assets/logolomba/fls2n.png";
import gsi from "../assets/logolomba/gsi.png";
import logoo2sn from "../assets/logolomba/logoo2sn.png";
import osn from "../assets/logolomba/osn.png";

const Lomba = () => {
    const datas = [
        {
            nama: "Olimpiade Penelitian Siswa Indonesia",
            tipe: "Riset dan Inovasi",
            foto: opsi,
            laman: "https://smp.pusatprestasinasional.kemdikbud.go.id/opsi",
            detail: "https://pusatprestasinasional.kemdikbud.go.id/event/riset-dan-inovasi/smp/olimpiade-penelitian-siswa-indonesia-2023-smp"
        },
        {
            nama: "Olimpiade Olahraga Siswa Nasional",
            tipe: "Olahraga",
            foto: logoo2sn,
            laman: "https://daftar-bpti.kemdikbud.go.id/",
            detail: "https://pusatprestasinasional.kemdikbud.go.id/event/olahraga/smp/olimpiade-olahraga-siswa-nasional-2024-2024-smp"
        },
        {
            nama: "Festival dan Lomba Seni Siswa Nasional",
            tipe: "Seni Budaya",
            foto: fls2n,
            laman: "https://daftar-bpti.kemdikbud.go.id/",
            detail: "https://pusatprestasinasional.kemdikbud.go.id/event/seni-budaya/smp/festival-dan-lomba-seni-siswa-nasional-2024-2024-smp"
        },
        {
            nama: "Olimpiade Sains Nasional",
            tipe: "Riset dan Inovasi",
            foto: osn,
            laman: "https://daftar-bpti.kemdikbud.go.id/",
            detail: "https://pusatprestasinasional.kemdikbud.go.id/event/riset-dan-inovasi/smp/olimpiade-sains-nasional-2024-2024-smp"
        },
        {
            nama: "Gala Siswa Indonesia",
            tipe: "Olahraga",
            foto: gsi,
            laman: "https://daftar-bpti.kemdikbud.go.id/",
            detail: "https://pusatprestasinasional.kemdikbud.go.id/event/olahraga/smp/gala-siswa-indonesia-2024-2024-smp"
        }
    ];
    return (
        <>
            <Navbar />
            <div className="mx-44 mt-8 flex justify-center items-center">
                <img className="w-12" src={GambarLomba} alt="image" />
                <h1 className="ml-4 font-bold">Informasi Lomba</h1>
            </div>
            <div className="mx-60 grid grid-cols-3">
                {datas.map((data, index) => (
                    <LombaCard key={index} datas={data} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Lomba;
