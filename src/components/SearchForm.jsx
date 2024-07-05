import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import Bindo from "../assets/MapelIcon/BIndo.png";
import Bingg from "../assets/MapelIcon/BIngg.png";
import Ipa from "../assets/MapelIcon/Ipa.png";
import Ips from "../assets/MapelIcon/Ips.png";
import Matematika from "../assets/MapelIcon/Matematika.png";
import Senbud from "../assets/MapelIcon/SenBud.png";
import Ppkn from "../assets/MapelIcon/Ppkn.png";
import MyArt from "../assets/PilihanImaginationKingdom/MyArt.png"
import MyLiterature from "../assets/PilihanImaginationKingdom/MyLiterature.png"
import { Link } from "react-router-dom";

const SearchForm = ({ datas, onSearch }) => {
    let { mapel, tipe } = useParams();
    const [query, setQuery] = useState("");
    const location = useLocation()
    const isPathMatching = (path) => location.pathname === path;
    if (!tipe){
        tipe = location.pathname.split('/')[2]
    }
    
    
    let pathTo;
    let image;
    let mapelView;
    let leftButtonText;
    let RightButtonText;

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
    if (tipe === 'MyArt'){
        image = MyArt
        mapelView = tipe
        leftButtonText = 'Daftar Karya'
        RightButtonText = 'Unggah Karyamu'
        pathTo = 'unggah'
    }else if (tipe === 'MyLiterature'){
        image = MyLiterature
        mapelView = tipe
        leftButtonText = 'Literature'
        RightButtonText = 'History'
        pathTo = 'history'
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
            {(tipe === 'MyArt' || tipe === 'MyLiterature') &&             
            <div className="grid mx-60 mt-4 grid-cols-2">
                <div className=" flex justify-center items-center">
                    <div className={`flex ${isPathMatching(`/imagination/${tipe}`) ? 'pb-1 rounded-2xl bg-[#F94C10]' : ''}`}>
                        <Link className={`py-2 w-44  text-black font-bold rounded-2xl border text-center ${isPathMatching(`/imagination/${tipe}`) ? 'bg-[#EFD595]' : 'bg-[#9F9F9F]'}`} to={`/imagination/${tipe}`}>{leftButtonText}</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div className={`flex ${isPathMatching(`/imagination/${tipe}/${pathTo}`) ? 'pb-1 rounded-2xl bg-[#F94C10]' : ''}`}>
                        <Link className={`py-2 w-44  text-black font-bold rounded-2xl border text-center ${isPathMatching(`/imagination/${tipe}/${pathTo}`) ? 'bg-[#EFD595]' : 'bg-[#9F9F9F]'}`} to={`/imagination/${tipe}/${pathTo}`}>{RightButtonText}</Link>
                    </div>                
                </div>

            </div>}
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
