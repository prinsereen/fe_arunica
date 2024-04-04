import Logo from "../assets/Navbar/Logo.png";
import profile from "../assets/Navbar/Anton.png";



function Navbar() {
    return (
        <>   
        <div className="flex items-center justify-between px-20 py-2 border-b-2 border-gray-300 shadow-b-md">
            <img src={Logo} alt="Logo" className="h-10" />
            <ul className="flex space-x-6 ">
                <li className="">Challenges</li>
                <li className="">Knowledge Kingdom</li>
                <li className="">Imagination Kingdom</li>
                <li className="">Leaderboard</li>
            </ul>
            <div className="border-2 border-[#91C8E4] p-2 rounded-lg flex items-center space-x-4">
                <h1 className="text-gray-700">Anton</h1>
                <img src={profile} alt="profile" className="h-10 rounded-full" />
            </div>
        </div>
        </>
    )
}

  
export default Navbar
  