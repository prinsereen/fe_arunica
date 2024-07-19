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
            console.log(response)
            if (response.accessToken) {
                api.putAccessToken(response.accessToken)
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
        <>
            <div className='min-h-screen grid grid-cols-2'>
                <div className="bg-white flex-grow">
                    <h2 className="text-center mt-28 text-3xl font-bold">Sign In</h2>
                    <form className="space-y-3" onSubmit={handleSubmit} action="">
                    <div className="mx-24 mt-4">
                        <label className="block text-sm text-[#515151] font-bold">NISN</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="nisn"
                            placeholder="Masukan NISN Anda"
                            value={formData.nisn}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-24 ">
                        <label className="block text-sm text-[#515151] font-bold">Passsword</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="password"
                            placeholder="Masukan password Anda"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mx-24 items-center justify-between">
                        <button type="submit" className=" mt-4 w-full bg-[#1450A3] text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Sign In
                        </button>
                    </div>
                    </form>
                    <p className="mt-4 flex mx-24 items-center justify-center">
                        Belum memiliki akun? <Link to="/register/siswa" className="text-[#1450A3] underline hover:text-indigo-800">Register</Link>
                    </p>
                </div>
                <div className="bg-[#F94C10] pl-2 rounded-l-3xl flex flex-col">
                    <div className="bg-[#EFD595] rounded-l-3xl flex-grow">
                        <div className='flex flex-col items-center'>
                            <img className="mt-8 w-[60px]" src={logo} alt="logo" />
                            <h1 className="text-2xl font-semibold">Selamat Datang di Arundemy</h1>
                        </div>
                        <div className='flex mt-8'>
                            <p className="mt-12 ml-4 font-semibold bg-[#91C8E4] rounded-l-lg rounded-b-lg h-[90px] p-2">
                                Selamat Datang Kembali<br />
                                Tantangan baru menantimu !!! <br />
                                 🥰🤩
                            </p>
                            <img className="w-[280px]" src={maskot} alt="maskot" />
                        </div>
                        <div className='flex flex-col items-center py-4'>
                            <p>Temukan Arundemy di</p>
                            <div className='flex items-center'>
                                <div className="p-2 z-40 rounded-full bg-white">
                                    <img className="w-[25px]" src={instagram} alt="instagram" />
                                </div>
                                <div className="z-30 p-1 -translate-x-2 bg-white rounded-r-full">
                                    <p className="px-2 bg-[#E8E8E8] rounded-r-full">arundemy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentLogin;
