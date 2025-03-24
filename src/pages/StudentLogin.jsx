import maskot from "../assets/StudentAuth/maskot.png";
import logo from "../assets/StudentAuth/logo.png";
import instagram from "../assets/StudentAuth/instagram.png";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StudentLogin = () => {
    const [formData, setFormData] = useState({
        nisn: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.login(formData);
            console.log(response);
            if (response.accessToken) {
                api.putAccessToken(response.accessToken);
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='min-h-screen flex flex-col md:grid md:grid-cols-2'>
            <div className="bg-white flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <h2 className="text-center text-3xl font-bold mb-6">Sign In</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm text-[#515151] font-bold">NISN</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border bg-[#E8E8E8] border-black rounded-full focus:outline-none focus:ring-black focus:border-black"
                                name="nisn"
                                placeholder="Masukan NISN Anda"
                                value={formData.nisn}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#515151] font-bold">Password</label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-3 py-2 border bg-[#E8E8E8] border-black rounded-full focus:outline-none focus:ring-black focus:border-black"
                                name="password"
                                placeholder="Masukan password Anda"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#1450A3] text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Sign In
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Belum memiliki akun? <Link to="/register/siswa" className="text-[#1450A3] underline hover:text-indigo-800">Register</Link>
                    </p>
                </div>
            </div>
            <div className="hidden md:flex flex-col bg-[#F94C10] rounded-l-3xl justify-center items-center pl-6">
                <div className="bg-[#EFD595] rounded-3xl w-full h-full flex flex-col items-center justify-center p-6">
                    <img className="w-[60px]" src={logo} alt="logo" />
                    <h1 className="text-2xl font-semibold mt-4 text-center">Selamat Datang di Arundemy</h1>
                    <div className='flex mt-8'>
                        <p className="font-semibold bg-[#91C8E4] h-[110px] rounded-lg p-4 text-center">
                            Selamat Datang Kembali<br />
                            Tantangan baru menantimu !!! <br />
                            🥰🤩
                        </p>
                        <img className="w-[200px] ml-4" src={maskot} alt="maskot" />
                    </div>
                    <div className='flex flex-col items-center py-4'>
                        <p>Temukan Arundemy di</p>
                        <div className='flex items-center mt-2'>
                            <div className="p-2 rounded-full translate-x-3 bg-white">
                                <img className="w-[25px]" src={instagram} alt="instagram" />
                            </div>
                            <div className="p-2 bg-white rounded-r-full">
                                <p className="px-2 bg-[#E8E8E8] rounded-r-full">arundemy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;