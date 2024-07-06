import { useState } from 'react';
import Logo from "../assets/Navbar/Logo.png";
import profile from "../assets/Navbar/Anton.png";
import { Link, useLocation } from "react-router-dom";

function GuruNavbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return (
        <>   
        <div className="flex items-center justify-between px-20 py-2 border-b-2 border-gray-300 shadow-b-md">
            <Link to="/guru" onClick={() => handleClick("/")}><img src={Logo} alt="Logo" className="h-10" /></Link>
            <ul className="flex space-x-6">
                <Link 
                    to="/soal" 
                    className={`hover:font-semibold ${activeLink === '/soal' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/soal")}
                >
                    Soal
                </Link>
                <Link 
                    to="/materi" 
                    className={`hover:font-semibold ${activeLink === '/materi' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/materi")}
                >
                    Materi
                </Link>
                <Link 
                    to="/karya" 
                    className={`hover:font-semibold ${activeLink === '/karya' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/karya")}
                >
                    Karya
                </Link>
            </ul>
            <div className="border-2 border-[#91C8E4] p-2 rounded-lg flex items-center space-x-4">
                <h1 className="text-gray-700">Pak Anton</h1>
                <img src={profile} alt="profile" className="h-10 rounded-full" />
            </div>
        </div>
        </>
    )
}

export default GuruNavbar;
