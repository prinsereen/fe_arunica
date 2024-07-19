import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import api from '../utils/api';

const Ringkasan = () => {
    const [editorContent, setEditorContent] = useState('');
    const [halamanDari, setHalamanDari] = useState('');
    const [halamanSampai, setHalamanSampai] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await api.historyBacaan({
                buku_id: id,
                dari: halamanDari,
                sampai: halamanSampai,
                ringkasan: editorContent
            });
            navigate(`/imagination/MyLiterature/history/${response.result.id}`);
        } catch (error) {
            console.error("Error submitting data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="mx-48">
                <h1 className="text-2xl font-bold flex justify-center items-center my-4">Ringkasan</h1>
                <div className="grid grid-cols-2 gap-4 mt-12">
                    <div>
                        <label className="block text-sm font-bold">Halaman Dibaca (Dari)</label>
                        <input
                            type="number"
                            className="mt-1 block w-full px-3 py-1 border text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="halamanDari"
                            value={halamanDari}
                            onChange={(e) => setHalamanDari(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Halaman Dibaca (Sampai)</label>
                        <input
                            type="number"
                            className="mt-1 block w-full px-3 py-1 border text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="halamanSampai"
                            value={halamanSampai}
                            onChange={(e) => setHalamanSampai(e.target.value)}
                        />
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
                <div className='flex justify-end mt-12'>
                    {loading ? (
                        <div className="flex items-center justify-center w-36 p-1">
                            <svg className="animate-spin h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                        </div>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="text-white mt-4 text-center w-36 p-1 rounded-lg bg-green-600 hover:bg-green-700 border"
                        >
                            Kirim
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Ringkasan;
