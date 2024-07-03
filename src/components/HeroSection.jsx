import PropTypes from 'prop-types';

const HeroSection = ({ data }) => {
    return (
        <>
            <div className={`${data.colorType === 'blue' ? 'bg-[#1450A3]' : 'bg-[#F94C10]'} mt-4 rounded-3xl mx-44 pb-2`}>
                <div className={`${data.colorType === 'blue' ? 'bg-[#91C8E4]' : 'bg-[#EFD595]'} flex flex-col justify-center items-center rounded-3xl h-[128px] pt-2`}>
                    <img className="w-[70px]" src={data.img} alt="img" />
                    <h2 className="text-center font-bold text-xl mt-1">{data.textHero}</h2>
                </div>
            </div>
        </>
    );
}

HeroSection.propTypes = {
    data: PropTypes.shape({
        colorType: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        textHero: PropTypes.string.isRequired
    }).isRequired
};

export default HeroSection;
