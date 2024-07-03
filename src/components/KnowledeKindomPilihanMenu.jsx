import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import MyBank from "../assets/PilihanKnowledgeKingdom/MyBank.png"
import MyQuick from "../assets/PilihanKnowledgeKingdom/MyQuick.png"
import MyRead from "../assets/PilihanKnowledgeKingdom/MyRead.png"
import MyTutor from "../assets/PilihanKnowledgeKingdom/MyTutor.png"

const KnowledeKindomPilihanMenu = ({data}) => {
    return (
        <>
                <div className="grid grid-cols-4 mx-44 mt-12">
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/MyRead`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={MyRead} alt="bindo" />
                        <h2 className="font-bold">MyRead</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/MyBank`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={MyBank} alt="bindo" />
                        <h2 className="font-bold">MyBank</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/MyTutor`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={MyTutor} alt="bindo" />
                        <h2 className="font-bold">MyTutor</h2>
                    </Link>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <Link to={`${data.path}/MyQuick`} className="w-1/2 flex flex-col justify-center items-center">
                        <img className=" w-1/2" src={MyQuick} alt="bindo" />
                        <h2 className="font-bold">MyQuick</h2>
                    </Link>
                </div>
            </div>
        </>
    );
}

KnowledeKindomPilihanMenu.propTypes = {
    data: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default KnowledeKindomPilihanMenu;
