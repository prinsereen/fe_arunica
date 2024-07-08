import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Ringkasan = () => {
    const [editorContent, setEditorContent] = useState('');

    return (
        <> 
            <Navbar/>
            <div className="mx-48">
                <h1 className="text-2xl font-bold flex justify-center items-center my-4">Ringkasan</h1>
                <div>
                    <label className="block text-sm font-bold">Judul Buku</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-1 border text-slate-500 bg-[#E8E8E8] rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        name="judul"
                        value="Bumi Tere - Liye"
                        readOnly
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block text-sm font-bold">Halaman Dibaca (Dari)</label>
                        <select
                            className="mt-1 block w-full px-3 py-1 border text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="halamanDari"
                        >
                            <option value="">Pilih halaman</option>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Halaman Dibaca (Sampai)</label>
                        <select
                            className="mt-1 block w-full px-3 py-1 border text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="halamanSampai"
                        >
                            <option value="">Pilih halaman</option>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-bold">Ringkasan</label>
                    <ReactQuill
                        theme="snow"
                        value={editorContent}
                        onChange={setEditorContent}
                        className="mt-1 h-[240px]"
                    />
                </div>
                <div className='flex  justify-end mt-12'>
                    <Link to="/imagination/MyLiterature/history/aaa" className="text-white mt-4 text-center  w-36 p-1 rounded-lg bg-green-600 hover:bg-green-700 border">Kirim</Link>
                </div>
            </div>  
            <Footer/>
        </>
    );
}

export default Ringkasan;
