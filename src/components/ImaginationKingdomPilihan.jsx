import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import MyArt from "../assets/PilihanImaginationKingdom/MyArt.png"
import MyLiterature from "../assets/PilihanImaginationKingdom/MyLiterature.png"

const ImaginationKindomPilihanMenu = ({data}) => {
    return (
        <>
                <div className="grid grid-cols-2 mx-44 mt-12">
                <div className=" flex flex-col justify-end items-end">
                    <Link to={`${data.path}/MyArt`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/3" src={MyArt} alt="bindo" />
                        <h2 className="font-bold">MyArt</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-start items-start">
                    <Link to={`${data.path}/MyLiterature`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/3" src={MyLiterature} alt="bindo" />
                        <h2 className="font-bold">MyLiterature</h2>
                    </Link>
                </div>
            </div>
        </>
    );
}

ImaginationKindomPilihanMenu.propTypes = {
    data: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default ImaginationKindomPilihanMenu;
