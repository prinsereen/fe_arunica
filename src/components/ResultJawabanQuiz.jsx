import maskot from "../assets/StudentAuth/maskot.png";


const ResultJawabanQuiz = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <div className="mt-12 mx-auto flex justify-center items-center">
                    <img className="w-36" src={maskot} alt="maskot" />
                    <p className="mx-4 p-2 rounded-b-lg rounded-r-lg bg-[#91C8E4]">KEREN, kamu telah menyelesaikan Quiz Geometri 🤩</p>
                </div>
                <div className="mx-auto flex justify-center mt-7 items-center space-x-12">
                   <div className="rounded-lg px-1 pb-1 w-20 bg-[#F94C10]">
                    <h1 className="text-white text-center font-bold">EXP</h1>
                    <h1 className="p-4 bg-white font-bold text-center rounded-lg">13</h1>
                   </div>
                   <div className="rounded-lg px-1 pb-1 w-20 bg-[#1450A3]">
                    <h1 className="text-white text-center font-bold">Score</h1>
                    <h1 className="p-4 bg-white font-bold text-center rounded-lg">4/5</h1>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default ResultJawabanQuiz;
