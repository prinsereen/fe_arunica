import { useEffect, useState } from 'react';
import profile from "../assets/ProgresSummary/Anton.png";
import Level from "../assets/ProgresSummary/Level.png";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Penyambutan from "../assets/ProgresSummary/Penyambutan.png";
ChartJS.register(ArcElement, Tooltip);
import api from "../utils/api";

const ProgresSummary = () => {
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await api.getProgressDashboard();
        setProgressData(response);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };

    fetchProgressData();
  }, []);

  if (!progressData) {
    return <div></div>;
  }

  const data = {
    labels: ['Matematika', 'IPA', 'PKN', 'Literasi', 'IPS', 'B. Indonesia', 'B. Inggris', 'Seni Budaya'],
    datasets: [
      {
        data: [
          (progressData.math * 100).toFixed(1),
          (progressData.ipa * 100).toFixed(1),
          (progressData.pkn * 100).toFixed(1),
          (progressData.literasi * 100).toFixed(1),
          (progressData.ips * 100).toFixed(1),
          (progressData.bindo * 100).toFixed(1),
          (progressData.bing * 100).toFixed(1),
          (progressData.senbud * 100).toFixed(1)
        ],
        backgroundColor: ['#79AB23', '#6E78FF', '#C74634', '#D62CCF', '#663399', '#C74634', '#D62CCF', '#663399'],
        hoverBackgroundColor: ['#79AB23', '#6E78FF', '#C74634', '#D62CCF', '#663399', '#C74634', '#D62CCF', '#663399'],
      },
    ],
  };

  const firstName = progressData.firstName;
  const level = progressData.level;
  const progress = progressData.progress;
  const progressColor = () => {
    if (progress <= 33) {
      return 'bg-[#ED1B24]';
    } else if (progress <= 66) {
      return 'bg-[#1450A3]';
    } else {
      return 'bg-[#3AB54A]';
    }
  };
  
  return (
    <>
      <div className="mx-44">
        {/* <img src={Backdrop} alt="backdrop" className="absolute inset-0 w-full px-44 h-40 pt-6" /> */}
        <div className="mt-4 border rounded-xl bg-[#F94C10]"> 
          <div className="flex mb-2 rounded-xl bg-[#EFD595]">    
            <div className="py-10 z-10 pl-16 w-2/5">
              <div className="flex space-x-2 justify-end">
                <img className="w-16 h-16 rounded-full" src={progressData.url_photo || profile} alt="profile" />
                <div className="px-4">
                  <h1 className="text-2xl font-bold pt-1">{`Halo ${firstName}`}</h1>
                  <h2 className="">Sudah siap naik kelas ?</h2>
                </div>
              </div>
              <div className="pl-8">
                <div>
                  <div className="flex h-4 mt-2 bg-gray-300 rounded-xl relative">
                    <div
                      className={`h-full rounded-xl ${progressColor()} transition-all duration-300`}
                      style={{ width: `${progress}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-[#E8E8E8] font-bold">
                      {progress.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/5 item-center">
              <div className="pt-8 flex flex-col items-center">
                <h1 className="z-10 font-bold text-2xl">Level</h1>
                <div className="flex justify-center items-center relative">
                  <h1 className="font-bold absolute z-20">{level}</h1>
                  <img src={Level} alt="level" className="w-2/5" />
                </div>
              </div>
            </div>

            <div className="w-28 h-1/5 pt-8 z-10">
              <Doughnut data={data} />
            </div>

            <div className="w-36 h-1/5 z-10 font-bold pl-4 pt-4">
              <ul>
                {data.datasets[0].data.map((subject, index) => (
                  <li key={index} className="text-xs">{subject}% {data.labels[index]}</li>
                ))}
              </ul>
            </div>  
          </div>
        </div>
      </div> 
      <div className="flex w-2/3 mx-auto pt-8">
        <img src={Penyambutan} alt="" className="" />
      </div>
    </>
  );
};

export default ProgresSummary;
