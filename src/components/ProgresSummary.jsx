import profile from "../assets/ProgresSummary/Anton.png"
import PropTypes from 'prop-types';
import Level from "../assets/ProgresSummary/Level.png"
import DonutChart from "./DonutChart";


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

  return (
    <> 
    <div className="border-2 flex">      
      <div className="border-2 pt-6 pl-20 w-2/5">
          <div className=" border-2  h-4/5 flex space-x-2 justify-end">
              <img className="  w-1/5" src={profile} alt="profile" />
              <div className="px-4">
                  <h1 className=" text-4xl font-bold pt-4 ">Halo Anton!</h1>
                  <h2 className=" text-md">Sudah siap naik kelas ? </h2>
              </div>
          </div>
          <div className="border-2  pl-56">
            <div>
                <div className=" flex h-4 mt-2 bg-gray-300 rounded-xl relative">
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

      <div className="border-2 w-1/5 item-center">
        <div className="border-2 pt-6 flex flex-col items-center"> 
          <h1 className="border-2  font-bold text-2xl">Level</h1>
          <img src={Level} alt="level" className=" border-2 w-1/2" />
        </div>
      </div>

      <div className="w-2/5 h-52">
        <DonutChart/>
      </div>

    </div>   
    </>
  );
};


ProgresSummary.propTypes = {
    progress: PropTypes.number.isRequired,
};
  
export default ProgresSummary;