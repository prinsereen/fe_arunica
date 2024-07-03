import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Leaderboard from "../assets/InformationPilihan/Leaderboard.png"
import Lomba from "../assets/InformationPilihan/Lomba.png"

const InformationPilihan = ({data}) => {
    return (
        <>
                <div className="grid grid-cols-2 mx-44 mt-12">
                <div className=" flex flex-col justify-end items-end">
                    <Link to={`${data.path}/Leaderboard`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/3" src={Leaderboard} alt="bindo" />
                        <h2 className="font-bold">Leaderboard</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-start items-start">
                    <Link to={`${data.path}/Lomba`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/3" src={Lomba} alt="bindo" />
                        <h2 className="font-bold">Lomba</h2>
                    </Link>
                </div>
            </div>
        </>
    );
}

InformationPilihan.propTypes = {
    data: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default InformationPilihan;
