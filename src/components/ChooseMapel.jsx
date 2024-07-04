import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Bindo from "../assets/MapelIcon/BIndo.png"
import Bingg from "../assets/MapelIcon/BIngg.png";
import Ipa from "../assets/MapelIcon/Ipa.png";
import Ips from "../assets/MapelIcon/Ips.png";
import Matematika from "../assets/MapelIcon/Matematika.png";
import Senbud from "../assets/MapelIcon/SenBud.png";
import Ppkn from "../assets/MapelIcon/Ppkn.png";

const ChooseMapel = ({data}) => {
    return (
        <>
            <div className="grid grid-cols-4 mx-44 mt-12">
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/matematika`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={Matematika} alt="bindo" />
                        <h2 className="font-bold">Matematika</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/ipa`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={Ipa} alt="bindo" />
                        <h2 className="font-bold">IPA</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/ips`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={Ips} alt="bindo" />
                        <h2 className="font-bold">IPS</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/bindo`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={Bindo} alt="bindo" />
                        <h2 className="font-bold">B. Indonesia</h2>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-3 mx-44 mt-4">
                <div className=" flex flex-col justify-end items-end">
                    <Link to={`${data.path}/bingg`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-[40%]" src={Bingg} alt="bindo" />
                        <h2 className="font-bold">B. Inggris</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/ppkn`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-[40%]" src={Ppkn} alt="bindo" />
                        <h2 className="font-bold">PPKN</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-start items-start">
                    <Link to={`${data.path}/senbud`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-[40%]" src={Senbud} alt="bindo" />
                        <h2 className="font-bold">Seni Budaya</h2>
                    </Link>
                </div>
            </div>
        </>
    );
}

ChooseMapel.propTypes = {
    data: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChooseMapel;
