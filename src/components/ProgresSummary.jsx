import profile from "../assets/ProgresSummary/Anton.png"
import PropTypes from 'prop-types';
import Level from "../assets/ProgresSummary/Level.png"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Penyambutan from "../assets/ProgresSummary/Penyambutan.png"
ChartJS.register(ArcElement, Tooltip);


const ProgresSummary = ({ progress }) => {
  const progressColor = () => {
    if (progress <= 33) {
      return 'bg-[#ED1B24]';
    } else if (progress <= 66) {
      return 'bg-[#1450A3]';
    } else {
      return 'bg-[#3AB54A]';
    }
  };
  
  const data = {
    labels: ['Matematika', 'IPA', 'PKN', 'Literasi', 'Lainnya'],
    datasets: [
      {
        data: [38, 25, 13, 12, 12],
        backgroundColor: ['#79AB23', '#6E78FF', '#C74634', '#D62CCF', '#663399'],
        hoverBackgroundColor: ['#79AB23', '#6E78FF', '#C74634', '#D62CCF', '#663399'],
      },
    ],
  };

  return (
<>
  <div className="mx-44">
    {/* <img src={Backdrop} alt="backdrop" className="absolute inset-0 w-full px-44 h-40 pt-6" /> */}
    <div className=" mt-4 border rounded-xl bg-[#F94C10]"> 
      <div className="flex  mb-2 rounded-xl bg-[#EFD595]">    
      <div className="py-10 z-10 pl-20 w-2/5">
          <div className="flex space-x-2 justify-end">
              <img className="w-1/6" src={profile} alt="profile" />
              <div className="px-4">
                  <h1 className="text-2xl font-bold pt-1">Halo Anton!</h1>
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
                        {progress}%
                    </div>
                </div>
            </div>
          </div>
      </div>

      <div className="w-1/5 item-center">
        <div className="pt-8 flex flex-col items-center "> 
          <h1 className="z-10 font-bold text-2xl">Level</h1>
          <img src={Level} alt="level" className=" z-10 w-2/5" />
        </div>
      </div>

      <div className="w-28 h-1/5 pt-8 z-10">
        <Doughnut data={data} />
      </div>

      <div className="w-36 h-1/5 z-10 font-bold pl-4 pt-10  ">
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


ProgresSummary.propTypes = {
    progress: PropTypes.number.isRequired,
};
  
export default ProgresSummary;