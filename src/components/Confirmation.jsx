import maskot from "../assets/StudentAuth/maskot.png";

const Confirmation = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <div className="mt-12 mx-auto flex justify-center items-center">
                    <img className="w-36" src={maskot} alt="maskot" />
                    <p className="mx-4 p-2 rounded-b-lg rounded-r-lg bg-[#91C8E4]">Apakah kamu sudah siap mengerjakan Quiz?</p>
                </div>
                <div className="mx-auto flex justify-center mt-7 items-center space-x-12">
                    <button className="bg-red-500 py-1 px-4 font-bold rounded-lg text-white">Belum Siap</button>
                    <button className="bg-green-600 py-1 px-4 font-bold rounded-lg text-white">Sudah Siap</button>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
