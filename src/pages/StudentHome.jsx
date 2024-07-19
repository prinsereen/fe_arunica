import Navbar from "../components/Navbar"
import ProgresSummary from "../components/ProgresSummary"
import Challenge from "../components/Challenge"
import KnowledgeKingdom from "../components/KnowledeKingdom"
import ImaginationKingdom from "../components/ImaginationKingdom"
import Footer from "../components/Footer"
import PersonalAssistance from "../components/personalAssistance"

function StudentHome() {
    return (
        <>
            <Navbar/>
            <ProgresSummary progress={65}/>
            <Challenge/>
            <KnowledgeKingdom/>
            <ImaginationKingdom/>
            <PersonalAssistance/>
            <Footer/>
        </>
    )
  }
  
export default StudentHome
  