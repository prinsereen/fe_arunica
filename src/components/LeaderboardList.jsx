import PropTypes from 'prop-types';

const LeaderboardList = ({ datas, index }) => {
    return (
        <div>
            <div className="flex rounded-full border-2 shadow-inner h-12 mt-2 mx-60 items-center">
                <h2 className="w-10 flex justify-center font-bold">{index}</h2>
                <img className="w-10 h-10 mr-4 rounded-full" src={datas.img} alt="image" />
                <h2 className="font-bold flex-grow">{datas.nama}</h2>
                <h2 className="font-bold ml-auto mr-8">{datas.Level}</h2>
            </div>
        </div>
    );
}

LeaderboardList.propTypes = {
    datas: PropTypes.shape({
        img: PropTypes.string.isRequired,
        nama: PropTypes.string.isRequired,
        Level: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
};

export default LeaderboardList;
