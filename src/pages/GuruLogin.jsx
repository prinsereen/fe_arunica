import Login from "../assets/GuruAuth/Login.png"
import { Link } from "react-router-dom";

const GuruLogin = () => {
    return (
        <div>
            <img src={Login} alt="assets" />
            <form className="space-y-3 mt-12" action="">
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
                <div className="flex mx-96 items-center justify-between">
                    <button type="submit" className=" mt-4 w-full bg-[#1450A3] text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Sign In
                    </button>
                </div>
            </form>
            <p className="mt-4 flex mx-96 items-center justify-center">
                Belum memiliki akun? <Link to="/register/guru" className="text-[#1450A3] underline hover:text-indigo-800">Register</Link>
            </p>
        </div>
    );
}

export default GuruLogin;
