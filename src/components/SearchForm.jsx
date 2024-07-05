import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Bindo from "../assets/MapelIcon/BIndo.png";
import Bingg from "../assets/MapelIcon/BIngg.png";
import Ipa from "../assets/MapelIcon/Ipa.png";
import Ips from "../assets/MapelIcon/Ips.png";
import Matematika from "../assets/MapelIcon/Matematika.png";
import Senbud from "../assets/MapelIcon/SenBud.png";
import Ppkn from "../assets/MapelIcon/Ppkn.png";

const SearchForm = ({ datas, onSearch }) => {
    const { mapel } = useParams();
    const [query, setQuery] = useState("");

    let image;
    let mapelView;
    if (mapel === 'matematika') {
        image = Matematika;
        mapelView = 'Matematika';
    } else if (mapel === 'ipa') {
        image = Ipa;
        mapelView = 'IPA';
    } else if (mapel === 'ips') {
        image = Ips;
        mapelView = 'IPS';
    } else if (mapel === 'bingg') {
        image = Bingg;
        mapelView = 'Bahasa Inggris';
    } else if (mapel === 'bindo') {
        image = Bindo;
        mapelView = 'Bahasa Indonesia';
    } else if (mapel === 'senbud') {
        image = Senbud;
        mapelView = 'Seni Budaya';
    } else if (mapel === 'ppkn') {
        image = Ppkn;
        mapelView = 'PPKN';
    }

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <>
            <div className="flex mt-8 justify-center items-center">
                <img className="w-[60px] pr-4" src={image} alt="image" />
                <h2 className="text-2xl font-bold">{mapelView}</h2>
            </div>
            <div className="mt-6 mx-60">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder={datas.placeholder}
                    className="w-full p-2 border border-gray-600 rounded-md text-gray-800"
                />
            </div>
        </>
    );
};

SearchForm.propTypes = {
    datas: PropTypes.shape({
        placeholder: PropTypes.string.isRequired
    }).isRequired,
    onSearch: PropTypes.func.isRequired
};

export default SearchForm;
