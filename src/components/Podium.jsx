import PropTypes from 'prop-types';

const Podium = ({ datas }) => {
    return (
        <div className="grid grid-cols-3 h-[300px] mx-60 mt-16">
            <div className="grid grid-rows-4">
                <div className="flex bg-[#91C8E4] rounded-l-xl flex-col justify-center items-center row-span-3 row-start-2 relative">
                    <img className="w-24 h-24 absolute top-0 transform -translate-y-16" src={datas[1].img} alt="img" />
                    <h1 className="pt-2 text-4xl text-[#1450A3] font-bold">2</h1>
                    <h2 className="text-xl pt-2 font-bold">{datas[1].nama}</h2>
                    <h2 className="text-xl pt-2 font-bold">{datas[1].Level}</h2>
                </div>
            </div>
            <div className="border flex flex-col bg-[#EFD595] justify-center rounded-t-xl items-center">
                <div className="flex flex-col justify-center items-center relative">
                    <img className="w-28 h-28 absolute top-0 transform -translate-y-40" src={datas[0].img} alt="img" />
                    <h1 className="pt-2 text-4xl text-[#F94C10] font-bold">1</h1>
                    <h2 className="text-xl pt-2 font-bold">{datas[0].nama}</h2>
                    <h2 className="text-xl pt-2 font-bold">{datas[0].Level}</h2>
                </div>
            </div>
            <div className="grid grid-rows-4">
                <div className="flex bg-[#91C8E4] rounded-r-xl flex-col justify-center items-center row-span-2 row-start-3 relative">
                    <img className="w-20 h-20 absolute top-0 transform -translate-y-12" src={datas[2].img} alt="img" />
                    <h1 className="pt-2 text-3xl text-[#1450A3] font-bold">3</h1>
                    <h2 className="text-xl pt-1 font-bold">{datas[2].nama}</h2>
                    <h2 className="text-xl pt-1 font-bold">{datas[2].Level}</h2>
                </div>
            </div>
        </div>
    );
};

Podium.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        nama: PropTypes.string.isRequired,
        Level: PropTypes.string.isRequired,
    })).isRequired,
};

export default Podium;
