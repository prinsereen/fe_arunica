import { useEffect, useState } from 'react';
import Logo from "../assets/Navbar/Logo.png";
import profilePlaceholder from "../assets/Navbar/Anton.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../utils/api";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [showDropdown, setShowDropdown] = useState(false);
    const [profileData, setProfileData] = useState({ firstName: 'Anton', url_photo: profilePlaceholder });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await api.getProfileNavbarSiswa();
                setProfileData(response);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const handleLogout = async () => {
        try {
            localStorage.removeItem('accessToken');
            await api.logout();
            navigate('/login/siswa');
        } catch (error) {
            console.error("Logout failed: ", error);
        }
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
            <div 
                className="relative border-2 border-[#91C8E4] p-2 rounded-lg flex items-center space-x-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className="text-gray-700">{profileData.firstName}</h1>
                <img src={profileData.url_photo || profilePlaceholder} alt="profile" className="h-8 w-8 rounded-full" />
                {showDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
                        <button 
                            className="block text-red-600 px-4 py-2 w-full text-left hover:bg-gray-100"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Navbar;
