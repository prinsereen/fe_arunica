import { useState } from 'react';
import maskot from "../assets/StudentAuth/maskot.png";
import logo from "../assets/StudentAuth/logo.png";
import instagram from "../assets/StudentAuth/instagram.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

const StudentRegister = () => {
    const [formData, setFormData] = useState({
        nisn: '',
        email: '',
        name: '',
        password: '',
        conf_password: ''
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
            const response = await api.register(formData);
            if (response.uuid) {
                navigate('/login/siswa');
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
            <div className="bg-[#F94C10] pr-2 md:rounded-r-3xl flex flex-col">
                <div className="bg-[#EFD595] md:rounded-r-3xl flex-grow flex flex-col items-center p-4">
                    <img className="mt-12 w-[50px] md:w-[60px]" src={logo} alt="logo" />
                    <h1 className="text-xl md:text-2xl font-semibold text-center">Selamat Datang di Arundemy</h1>
                    <div className='flex flex-col items-center mt-6 md:flex-row md:mt-8'>
                        <img className="w-[200px] md:w-[280px]" src={maskot} alt="maskot" />
                        <p className="mt-4 md:mt-12 ml-0 md:ml-4 font-semibold bg-[#91C8E4] rounded-lg p-3 text-center md:text-left">
                            Halo aku Arun,<br />
                            Aku akan menemanimu <br />
                            menjelajah dunia arunica 🥰🤩
                        </p>
                    </div>
                    <div className='flex flex-col items-center py-4'>
                        <p>Temukan Arundemy di</p>
                        <div className='flex items-center'>
                            <div className="p-2 rounded-full bg-white">
                                <img className="w-[20px] md:w-[25px]" src={instagram} alt="instagram" />
                            </div>
                            <div className="p-1 -translate-x-2 bg-white rounded-r-full">
                                <p className="px-2 bg-[#E8E8E8] rounded-r-full">arundemy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white flex-grow flex flex-col items-center p-6">
                <h2 className="text-2xl mt-12 md:text-3xl font-bold">Registrasi</h2>
                <form className="space-y-3 w-full max-w-md" onSubmit={handleSubmit}>
                    {['nisn', 'email', 'name', 'password', 'conf_password'].map((field, index) => (
                        <div key={index}>
                            <label className="block text-sm text-[#515151] font-bold capitalize">{field.replace('_', ' ')}</label>
                            <input
                                type={field.includes('password') ? 'password' : 'text'}
                                className="mt-1 block w-full px-3 py-2 border bg-[#E8E8E8] border-black rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                name={field}
                                placeholder={`Masukan ${field.replace('_', ' ')} Anda`}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button type="submit" className="mt-4 w-full bg-[#1450A3] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Sudah memiliki akun? <Link to="/login/siswa" className="text-[#1450A3] underline hover:text-indigo-800">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default StudentRegister;
