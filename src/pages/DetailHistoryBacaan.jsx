import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import maskot from "../assets/StudentAuth/maskot.png"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const DetailHistoryBacaan = () => {
    const nilaiPemahaman = 86;

    const dataPemahamanSiswa = {
        labels: ['Matematika'],
        datasets: [
          {
            data: [nilaiPemahaman, 100 - nilaiPemahaman],
            backgroundColor: ['#1450A3', '#FFFFFF'],
            hoverBackgroundColor: ['#1450A3', '#FFFFFF'],
          },
        ],
    }
    const dataPemahamanSiswaA = {
        labels: ['Matematika'],
        datasets: [
          {
            data: [nilaiPemahaman, 100 - nilaiPemahaman],
            backgroundColor: ['#F94C10', '#FFFFFF'],
            hoverBackgroundColor: ['#F94C10', '#FFFFFF'],
          },
        ],
    }
    const dataPemahamanSiswaB = {
        labels: ['Matematika'],
        datasets: [
          {
            data: [nilaiPemahaman, 100 - nilaiPemahaman],
            backgroundColor: ['#EFD595', '#FFFFFF'],
            hoverBackgroundColor: ['#EFD595', '#FFFFFF'],
          },
        ],
    }

    return (
        <>
        <Navbar/>
        <div className="mx-44 mt-8">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold my-1">Feedback Ringkasan</h1>
                <h2 className="font-bold">Bumi - Tere Liye</h2>
            </div>
        </div>
        <div className="mx-44 grid grid-cols-3 mt-8">
            <div className="px-8 flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl font-bold">Pemahaman siswa</h1>
                <Doughnut data={dataPemahamanSiswa}/>
                <label className="flex justify-center items-center font-bold">86%</label> 
            </div>
            <div className="px-8  flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl font-bold">Kesesuaian Ringkasan</h1>
                <Doughnut data={dataPemahamanSiswaA}/>
                <label className="flex justify-center items-center font-bold">86%</label> 
            </div>
            <div className="px-8  flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl font-bold">Exp</h1>
                <Doughnut data={dataPemahamanSiswaB}/>
                <label className="flex justify-center items-center font-bold">86%</label> 
            </div>
        </div>
        <div className="mx-52 mt-8 flex justify-start items-center">
            <img className="w-24 " src={maskot} alt="maskot" />
            <div className="border rounded-b-lg rounded-r-lg bg-[#EFD595] ml-8 p-2">Anton, ringkasan ceritamu jelas, tapi tambahkan detail dinamika hubungan karakter dan nuansa petualangan. Sentuh aspek emosional karakter, dan berikan pendapat pribadimu. Pertahankan teknik penulisan yang baik, dan gambarkan keterkaitan ide-ide utama. Dengan sentuhan ini, ringkasanmu akan lebih memikat. Tetap semangat!</div>
        </div>
        <Footer/>
        </>
    );
}

export default DetailHistoryBacaan;
