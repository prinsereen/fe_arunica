import profile from "../assets/ProgresSummary/Anton.png"
import PropTypes from 'prop-types';
import Level from "../assets/ProgresSummary/Level.png"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Backdrop from "../assets/ProgresSummary/Backdrop.png";
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
  <div className="relative">
    <img src={Backdrop} alt="backdrop" className="absolute inset-0 w-full px-64 h-60 pt-6" />
    <div className="flex">      
      <div className="pt-16 z-10 pl-20 w-2/5">
          <div className="flex space-x-2 justify-end">
              <img className="w-1/6" src={profile} alt="profile" />
              <div className="px-4">
                  <h1 className="text-4xl font-bold pt-4">Halo Anton!</h1>
                  <h2 className="text-md">Sudah siap naik kelas ?</h2>
              </div>
          </div>
          <div className="pl-56">
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
        <div className="pt-16 flex flex-col items-center "> 
          <h1 className="z-10 font-bold text-2xl">Level</h1>
          <img src={Level} alt="level" className=" z-10 w-2/5" />
        </div>
      </div>

      <div className="w-36 h-1/5 pt-16 z-10">
        <Doughnut data={data} />
      </div>

      <div className="w-48 h-1/5 z-10 font-bold pl-4 pt-20">
        <ul>
          {data.datasets[0].data.map((subject, index) => (
            <li key={index}>{subject}% {data.labels[index]}</li>
          ))}
        </ul>
       </div>
    </div>
    <div className="flex justify-center pt-16">
      <img src={Penyambutan} alt="" />
    </div>
  </div> 
</>

  );
};


ProgresSummary.propTypes = {
    progress: PropTypes.number.isRequired,
};
  
export default ProgresSummary;