import PropTypes from 'prop-types';

const JawabanComponents = ({soal, pilihanA, pilihanB, pilihanC, pilihanD}) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className=" p-4 mb-8 text-center">
                    <p className='text-2xl'>{soal}</p>
                </div>
            </div>
            <div className="grid h-64 grid-cols-2 mt-8 w-5/6 md:grid-cols-4 gap-4 mx-auto">
                <button className="bg-[#EFD595] hover:bg-[#F94C10] rounded-lg border-2 p-4 text-center flex flex-col items-center justify-center">
                    <h1 className='font-bold'>A</h1>
                    <h2 className="">{pilihanA}</h2>
                </button>
                <button className="bg-[#91C8E4] hover:bg-[#1450A3] rounded-lg border-2 p-4 text-center flex flex-col items-center justify-center">
                    <h1 className='font-bold'>B</h1>
                    <h2>{pilihanB}</h2>
                </button>
                <button className="bg-[#EFD595] hover:bg-[#F94C10] rounded-lg border-2 p-4 text-center flex flex-col items-center justify-center">
                    <h1 className='font-bold'>C</h1>
                    <h2>{pilihanC}</h2>
                </button>
                <button className="bg-[#91C8E4] hover:bg-[#1450A3] rounded-lg border-2 p-4 text-center flex flex-col items-center justify-center">
                    <h1 className='font-bold'>D</h1>
                    <h2>{pilihanD}</h2>
                </button>
            </div>
        </div>
    );
}

JawabanComponents.propTypes = {
    soal: PropTypes.string.isRequired,
    pilihanA: PropTypes.string.isRequired,
    pilihanB: PropTypes.string.isRequired,
    pilihanC: PropTypes.string.isRequired,
    pilihanD: PropTypes.string.isRequired,
};

export default JawabanComponents;
