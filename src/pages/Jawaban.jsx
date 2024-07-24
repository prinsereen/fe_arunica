import JawabanComponents from "../components/JawabanComponents";
import Confirmation from "../components/Confirmation";
import ResponseJawaban from "../components/ResponseJawaban";
import ResultJawabanQuiz from "../components/ResultJawabanQuiz";


const Jawaban = () => {

    return (
        <div>
            <JawabanComponents/>
            <ResultJawabanQuiz/>
            <ResponseJawaban type={true}/>
            <Confirmation/>
        </div>
    );
}

export default Jawaban;
