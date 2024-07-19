import { useState, useEffect } from 'react';
import LiteratureHistory from './LiteratureHistoryCard';
import api from '../utils/api';

const LiteratureList = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getMyBukuBacaan();
                const mappedData = response.map(item => ({
                    img: item.book.url_sampul,
                    judul: item.book.judul,
                    halaman: `${item.dari} - ${item.sampai}`,
                    idDetail: item.id
                }));
                setDatas(mappedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-64 mt-12">
            <div className="grid pb-2 border-b-2 grid-cols-3">
                <h2 className="font-bold flex justify-center items-center">Judul</h2>
                <h2 className="font-bold flex justify-center items-center">Halaman Yang Dibaca</h2>
                <h2 className="font-bold flex justify-center items-center">Detail</h2>
            </div>
            <div className='overflow-y-auto max-h-96'>
                {datas.map((data, index) => (
                    <LiteratureHistory key={index} datas={data} />
                ))}
            </div>
        </div>
    );
};

export default LiteratureList;
