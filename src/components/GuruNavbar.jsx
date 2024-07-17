import { useState } from 'react';
import Logo from "../assets/Navbar/Logo.png";
import profile from "../assets/Navbar/Anton.png";
import { Link, useLocation} from "react-router-dom";

function GuruNavbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [selectedClass, setSelectedClass] = useState("7A");
    // const navigate = useNavigate()

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };

    return (
        <>   
        <div className="flex items-center justify-between px-20 py-2 border-b-2 border-gray-300 shadow-b-md">
            <div className='flex'>
                <Link to={`/guru/soal/${selectedClass}`} onClick={() => handleClick("/")}><img src={Logo} alt="Logo" className="h-10" /></Link>
                <select 
                    name="class" 
                    id="class" 
                    value={selectedClass} 
                    onChange={handleClassChange}
                    className="ml-4 border bg-[#EFD595] border-gray-300 rounded-full px-6"
                >
                    <option value="7A">7A</option>
                    <option value="7B">7B</option>
                    <option value="7C">7C</option>
                </select>
            </div>
            <ul className="flex space-x-6">
                <Link 
                    to={`/guru/soal/${selectedClass}`} 
                    className={`hover:font-semibold ${activeLink === `/guru/soal/${selectedClass}` ? 'font-semibold' : ''}`}
                    onClick={() => handleClick(`/guru/soal/${selectedClass}`)}
                >
                    Soal
                </Link>
                <Link 
                    to={`/guru/materi/${selectedClass}`} 
                    className={`hover:font-semibold ${activeLink === `/guru/materi/${selectedClass}` ? 'font-semibold' : ''}`}
                    onClick={() => handleClick(`/guru/materi/${selectedClass}`)}
                >
                    Materi
                </Link>
                <Link 
                    to={`/guru/karya/${selectedClass}`} 
                    className={`hover:font-semibold ${activeLink === `/guru/karya/${selectedClass}` ? 'font-semibold' : ''}`}
                    onClick={() => handleClick(`/guru/karya/${selectedClass}`)}
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
