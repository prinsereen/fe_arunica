import Navbar from "../components/Navbar"
import ProgresSummary from "../components/ProgresSummary"
import Challenge from "../components/Challenge"
import KnowledgeKingdom from "../components/KnowledeKingdom"
import ImaginationKingdom from "../components/ImaginationKingdom"

function StudentHome() {
    return (
        <>
            <Navbar/>
            <ProgresSummary progress={65}/>
            <Challenge/>
            <KnowledgeKingdom/>
            <ImaginationKingdom/>
        </>
    )
  }
  
export default StudentHome
  