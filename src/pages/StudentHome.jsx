import Navbar from "../components/Navbar"
import ProgresSummary from "../components/ProgresSummary"
import Challenge from "../components/Challenge"

function StudentHome() {
    return (
        <>
            <Navbar/>
            <ProgresSummary progress={65}/>
            <Challenge/>
        </>
    )
  }
  
export default StudentHome
  