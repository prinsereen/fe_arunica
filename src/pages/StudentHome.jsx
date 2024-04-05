import Navbar from "../components/Navbar"
import ProgresSummary from "../components/ProgresSummary"

function StudentHome() {
    return (
        <>
            <Navbar/>
            <ProgresSummary progress={65}/>
        </>
    )
  }
  
export default StudentHome
  