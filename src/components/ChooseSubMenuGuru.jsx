import { Link } from 'react-router-dom';

const ChooseSubMenuGuru = () => {
    return (
        <div>
            <div className='mx-44 mt-8 gap-12 grid grid-cols-2'>
                <div className='border rounded-lg p-8 bg-[#E8E8E8]'>
                    <h1 className='text-2xl text-center font-bold'>MyQuiz</h1>
                    <div className='flex flex-col'>
                        <Link to={'/guru/daftarsoal'} className='bg-[#EFD595] font-bold border py-4 rounded-lg text-center mt-8'> Daftar Soal</Link>
                        <Link to={'/guru/unggahsoal'} className='bg-[#91C8E4] font-bold border py-4 rounded-lg text-center mt-8'> Tambah Soal Baru</Link>
                    </div>
                </div>
                <div className='border rounded-lg p-8 bg-[#E8E8E8]'>
                    <h1 className='text-2xl text-center font-bold'>MyBank</h1>
                    <div className='flex flex-col'>
                        <Link className='bg-[#EFD595] font-bold border py-4 rounded-lg text-center mt-8'> Daftar Soal</Link>
                        <Link className='bg-[#91C8E4] font-bold border py-4 rounded-lg text-center mt-8'> Tambah Soal Baru</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ChooseSubMenuGuru;
