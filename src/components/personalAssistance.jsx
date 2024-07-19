import { useState } from "react";
import maskot from "../assets/StudentAuth/maskot.png";
import api from "../utils/api";

const PersonalAssistance = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [inputQuestion, setInputQuestion] = useState("");
    const [conversation, setConversation] = useState([]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleInputChange = (e) => {
        setInputQuestion(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmitQuestion();
        }
    };

    const handleSubmitQuestion = async () => {
        if (!inputQuestion.trim()) return;
        const newConversation = [...conversation, { type: "question", text: inputQuestion }];
        setConversation(newConversation);
        setInputQuestion("");

        try {
            console.log(inputQuestion)
            const res = await api.arun({pertanyaan:inputQuestion});
            if (res.result) {
                setConversation([...newConversation, { type: "answer", text: res.result }]);
            } else {
                throw new Error("Response does not contain 'result'");
            }
        } catch (error) {
            console.error("Error fetching response from Arun API", error);
            setConversation([...newConversation, { type: "answer", text: "Sorry, there was an error getting the response." }]);
        }
    };

    return (
        <div
            className={`fixed bottom-4 right-4 ${isHovered ? "w-64 h-96" : "w-24 h-24"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "all 0.3s ease" }}
        >
            <img className="w-full h-full" src={maskot} alt="maskot" />
            {isHovered && (
                <div className="absolute top-0 border-2 left-0 w-full h-full bg-white p-4 shadow-lg rounded-lg overflow-y-auto">
                    <div className="flex flex-col h-full">
                        <div className="flex-grow overflow-y-auto">
                            {conversation.map((entry, index) => (
                                <div key={index} className={`mb-2 `}>
                                    <p className={`${entry.type === "question" ? "bg-[#91C8E4] text-right" : "bg-[#EFD595] "}  font-semibold rounded-md p-2 border`}>{entry.text}</p> 
                                </div>
                            ))}
                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                placeholder="Tanyakan Sesuatu ....."
                                className="w-full p-2 border rounded-md"
                                value={inputQuestion}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                            />
                            <button
                                onClick={handleSubmitQuestion}
                                className="mt-2 p-2 bg-[#1450A3] text-white rounded-md w-full"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PersonalAssistance;
