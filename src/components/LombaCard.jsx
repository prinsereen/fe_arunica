import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const LombaCard = ({ datas }) => {
    return (
        <div className="flex mt-8 flex-col justify-center items-center rounded-lg bg-[#EFD595] w-52 border h-80">
            <img className="p-x w-32" src={datas.foto} alt="foto" />
            <h1 className="text-center font-bold px-4">{datas.nama}</h1>
            <h1 className="text-center px-2 text-white font-semibold py-1 bg-[#79AB23] text-sm rounded-full mt-4">{datas.tipe}</h1>
            <div className="grid grid-cols-2 gap-4">
                <Link className="bg-[#C74634] hover:bg-red-900 text-white py-1 rounded-md text-center px-4 mt-4" to={datas.laman}>Laman</Link>
                <Link className="bg-[#663399] hover:bg-violet-950 text-white py-1 text-center px-4 rounded-md mt-4" to={datas.detail}>Detail</Link>
            </div>
        </div>
    );
}

LombaCard.propTypes = {
    datas: PropTypes.shape({
        foto: PropTypes.string.isRequired,
        nama: PropTypes.string.isRequired,
        tipe: PropTypes.string.isRequired,
        laman: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
    }).isRequired,
};

export default LombaCard;
