import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LiteratureHistory = ({ datas }) => {
    return (
        <>
            <div className="grid grid-cols-3 my-4">
                <div className="flex">
                    <img className="mx-2 w-1/3" src={datas.img} alt="image" />
                    <h2 className="flex font-bold justify-center items-center">{datas.judul}</h2>
                </div>
                <div className="flex font-bold justify-center items-center">
                    <h2>{datas.halaman}</h2>
                </div>
                <div className="flex justify-center items-center">
                <Link to={`/imagination/MyLiterature/history/${datas.idDetail}`} className=' border rounded-full bg-green-600 text-white flex justify-center items-center w-36 h-8'>Detail</Link>
                </div>
            </div>
        </>
    );
};

LiteratureHistory.propTypes = {
    datas: PropTypes.shape({
        img: PropTypes.string.isRequired,
        judul: PropTypes.string.isRequired,
        halaman: PropTypes.string.isRequired,
        idDetail: PropTypes.string.isRequired,
    }).isRequired,
};

export default LiteratureHistory;
