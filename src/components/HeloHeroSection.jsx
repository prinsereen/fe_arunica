import maskot from "../assets/StudentAuth/maskot.png"
import PropTypes from 'prop-types';


const HeloHeroSection = ({data}) => {
    return (
        <>
            <div className="mx-52 mr-72 mt-12 grid grid-cols-3">
                <img className="justify-self-end self-end w-1/2" src={maskot} alt="maskot" />
                <div className="col-span-2">
                    <p className="p-4 m-2 font-bold rounded-b-lg rounded-r-lg bg-[#91C8E4]">{data.textHeloHero}</p>
                </div>
            </div>
        </>
    );
}

HeloHeroSection.propTypes = {
    data: PropTypes.shape({
        textHeloHero: PropTypes.string.isRequired,
    }).isRequired,
};


export default HeloHeroSection;
