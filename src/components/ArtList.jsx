import { useState, useEffect } from 'react';
import ArtHistory from './ArtHistoryCard';
import api from '../utils/api';

const ArtList = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getMyComic();
                setDatas(response);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-64 mt-12 ">
            <div className="grid pb-2 border-b-2 grid-cols-3">
                <h2 className="font-bold flex justify-center items-center">Judul</h2>
                <h2 className="font-bold flex justify-center items-center">Tanggal Unggah</h2>
                <h2 className="font-bold flex justify-center items-center">Status</h2>
            </div>
            <div className='overflow-y-auto max-h-96'>
                {datas.map((data, index) => (
                    <ArtHistory key={index} datas={data} />
                ))}
            </div>
        </div>
    );
};

export default ArtList;
