import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import maskot from "../assets/StudentAuth/maskot.png";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useParams } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip);
import api from "../utils/api";

const DetailHistoryBacaan = () => {
    const { id } = useParams();

    const [data, setData] = useState({
        pemahanan_siswa: 0,
        kesesuaiaan_ringkasan: 0,
        gen_ai_feedback: "",
        exp: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.HistoryRingkasanById({ id });
                setData(response);
                // console.log(data)
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [id]);

    const dataPemahamanSiswa = {
        labels: ['Pemahaman Siswa'],
        datasets: [
            {
                data: [data.pemahanan_siswa, 100 - data.pemahanan_siswa],
                backgroundColor: ['#1450A3', '#FFFFFF'],
                hoverBackgroundColor: ['#1450A3', '#FFFFFF'],
            },
        ],
    };

    const kesesuaianRingkasan = {
        labels: ['Kesesuaian Ringkasan'],
        datasets: [
            {
                data: [data.kesesuaiaan_ringkasan, 100 - data.kesesuaiaan_ringkasan],
                backgroundColor: ['#F94C10', '#FFFFFF'],
                hoverBackgroundColor: ['#F94C10', '#FFFFFF'],
            },
        ],
    };

    const expData = {
        labels: ['EXP'],
        datasets: [
            {
                data: [data.exp, 10 - data.exp],
                backgroundColor: ['#EFD595', '#FFFFFF'],
                hoverBackgroundColor: ['#EFD595', '#FFFFFF'],
            },
        ],
    };

    return (
        <>
            <Navbar />
            <div className="mx-44 mt-8">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold my-1">Feedback Ringkasan</h1>
                </div>
            </div>
            <div className="mx-44 grid grid-cols-3 mt-8">
                <div className="px-8 flex flex-col justify-center items-center">
                    <h1 className="mb-4 text-xl font-bold">Pemahaman siswa</h1>
                    <Doughnut data={dataPemahamanSiswa} />
                    <label className="flex justify-center items-center font-bold">{data.pemahanan_siswa}%</label>
                </div>
                <div className="px-8 flex flex-col justify-center items-center">
                    <h1 className="mb-4 text-xl font-bold">Kesesuaian Ringkasan</h1>
                    <Doughnut data={kesesuaianRingkasan} />
                    <label className="flex justify-center items-center font-bold">{data.kesesuaiaan_ringkasan}%</label>
                </div>
                <div className="px-8 flex flex-col justify-center items-center">
                    <h1 className="mb-4 text-xl font-bold">Exp</h1>
                    <Doughnut data={expData} />
                    <label className="flex justify-center items-center font-bold">{data.exp}</label>
                </div>
            </div>
            <div className="mx-52 mt-8 flex justify-start items-center">
                <img className="w-24" src={maskot} alt="maskot" />
                <div className="border rounded-b-lg rounded-r-lg bg-[#EFD595] ml-8 p-2">
                    {data.gen_ai_feedback}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetailHistoryBacaan;
