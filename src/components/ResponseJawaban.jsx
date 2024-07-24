import PropTypes from "prop-types";
import Benar from "../assets/ResponseJawaban/Benar.png";
import Salah from "../assets/ResponseJawaban/Salah.png";

const ResponseJawaban = ({ type }) => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <img className="w-48" src={type ? Benar : Salah} alt="foto" />
            <h1 className="mt-4 text-xl font-bold">{type ? "Benar" : "Salah"}</h1>
        </div>
    );
}

ResponseJawaban.propTypes = {
    type: PropTypes.bool.isRequired
};

export default ResponseJawaban;
