import Register from "../assets/GuruAuth/Register.png"
import { Link } from "react-router-dom";


const GuruRegister = () => {
    return (
        <div>
            <img src={Register} alt="register" />
            <form className="space-y-3" action="">
                    <div className="mx-96 mt-4">
                        <label className="block text-sm text-[#515151] font-bold">NIP</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="NIP"
                            placeholder="Masukan NIP Anda"
/*                             value={formData.username}
                            onChange={handleChange} */
                        />
                    </div>
                    <div className="mx-96 ">
                        <label className="block text-sm text-[#515151] font-bold">Email</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="email"
                            placeholder="Masukan Email Anda"
/*                             value={formData.username}
                            onChange={handleChange} */
                        />
                    </div>
                    <div className="mx-96 ">
                        <label className="block text-sm text-[#515151] font-bold">Nama Lengkap</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="nama"
                            placeholder="Masukan nama lengkap Anda"
/*                             value={formData.username}
                            onChange={handleChange} */
                        />
                    </div>
                    <div className="mx-96 ">
                        <label className="block text-sm text-[#515151] font-bold">Passsword</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="password"
                            placeholder="Masukan password Anda"
/*                             value={formData.username}
                            onChange={handleChange} */
                        />
                    </div>
                    <div className="mx-96 ">
                        <label className="block text-sm text-[#515151] font-bold">Konfirmasi Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-1 border bg-[#E8E8E8] border-black rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="password"
                            placeholder="Masukan kembali password baru Anda"
/*                             value={formData.username}
                            onChange={handleChange} */
                        />
                    </div>
                    <div className="flex mx-96 items-center justify-between">
                        <button type="submit" className=" mt-4 w-full bg-[#1450A3] text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Register
                        </button>
                    </div>
                    </form>
                    <p className="mt-4 flex mx-96 items-center justify-center">
                        Sudah memiliki akun? <Link to="/login/guru" className="text-[#1450A3] underline hover:text-indigo-800">Sign In</Link>
                    </p>
        </div>
    );
}

export default GuruRegister;
