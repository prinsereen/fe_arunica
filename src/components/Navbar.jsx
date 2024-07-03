import { useState } from 'react';
import Logo from "../assets/Navbar/Logo.png";
import profile from "../assets/Navbar/Anton.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return (
        <>   
        <div className="flex items-center justify-between px-20 py-2 border-b-2 border-gray-300 shadow-b-md">
            <Link to="/" onClick={() => handleClick("/")}><img src={Logo} alt="Logo" className="h-10" /></Link>
            <ul className="flex space-x-6">
                <Link 
                    to="/challenges" 
                    className={`hover:font-semibold ${activeLink === '/challenges' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/challenges")}
                >
                    Challenges
                </Link>
                <Link 
                    to="/knowledge" 
                    className={`hover:font-semibold ${activeLink === '/knowledge' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/knowledge")}
                >
                    Knowledge Kingdom
                </Link>
                <Link 
                    to="/imagination" 
                    className={`hover:font-semibold ${activeLink === '/imagination' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/imagination")}
                >
                    Imagination Kingdom
                </Link>
                <Link 
                    to="/information" 
                    className={`hover:font-semibold ${activeLink === '/information' ? 'font-semibold' : ''}`}
                    onClick={() => handleClick("/Information")}
                >
                    Information
                </Link>
            </ul>
            <div className="border-2 border-[#91C8E4] p-2 rounded-lg flex items-center space-x-4">
                <h1 className="text-gray-700">Anton</h1>
                <img src={profile} alt="profile" className="h-10 rounded-full" />
            </div>
        </div>
        </>
    )
}

export default Navbar;
