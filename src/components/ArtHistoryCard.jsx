import PropTypes from 'prop-types';

const ArtHistory = ({ datas }) => {
    return (
        <>
            <div className="grid grid-cols-3 my-4">
                <div className="flex">
                    <img className="mx-2 w-1/3" src={datas.img} alt="image" />
                    <h2 className="flex font-bold justify-center items-center">{datas.judul}</h2>
                </div>
                <div className="flex font-bold justify-center items-center">
                    <h2>{datas.unggahDate}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className={`flex text-white justify-center items-center w-36 h-8 rounded-full border ${
                        datas.status === 'Ditolak' ? 'bg-red-600' :
                        datas.status === 'Disetujui' ? 'bg-green-600' :
                        datas.status === 'Proses Verifikasi' ? 'bg-gray-400' : 'bg-blue-50'
                    }`}>
                        {datas.status}
                    </h2>
                </div>
            </div>
        </>
    );
};

ArtHistory.propTypes = {
    datas: PropTypes.shape({
        img: PropTypes.string.isRequired,
        judul: PropTypes.string.isRequired,
        unggahDate: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default ArtHistory;
