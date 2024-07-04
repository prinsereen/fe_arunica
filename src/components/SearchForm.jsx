import { useParams } from "react-router-dom";
import Bindo from "../assets/MapelIcon/BIndo.png"
import Bingg from "../assets/MapelIcon/BIngg.png";
import Ipa from "../assets/MapelIcon/Ipa.png";
import Ips from "../assets/MapelIcon/Ips.png";
import Matematika from "../assets/MapelIcon/Matematika.png";
import Senbud from "../assets/MapelIcon/SenBud.png";
import Ppkn from "../assets/MapelIcon/Ppkn.png";

const SearchForm = () => {
    const {mapel} = useParams()
    let image;
    let mapelView;
    if (mapel === 'matematika'){
        image = Matematika
        mapelView = 'Matematika'
    }if (mapel === 'ipa'){
        image = Ipa
        mapelView = 'IPA'
    }if (mapel === 'ips'){
        image = Ips
        mapelView = 'IPS'
    }if (mapel === 'bingg'){
        image = Bingg
        mapelView = 'Bahasa Inggris'
    }if (mapel === 'bindo'){
        image = Bindo
        mapelView = 'Bahasa Indonesia'
    }if (mapel === 'senbud'){
        image = Senbud
        mapelView = 'Seni Budaya'
    }if (mapel === 'ppkn'){
        image = Ppkn
        mapelView = 'PPKN'
    }

    return (
        <>
        <div className="flex mt-8 justify-center items-center">
            <img className="w-[60px] pr-4" src={image} alt="image" />
            <h2 className="text-2xl font-bold">{mapelView}</h2>
        </div>
        <div className="mt-6 mx-60">
          <input
            type="text"
            placeholder="Explorasi Quiz yang ingin kamu taklukkan....."
            className="w-full p-2 border border-gray-600 rounded-md text-gray-800"
          />
        </div>
            
        </>
    );
}

export default SearchForm;
