import {Routes, Route} from 'react-router-dom';
import StudentHome from './pages/StudentHome';
import StudentRegister from './pages/StudentRegister';
import StudentLogin from './pages/StudentLogin';
import ChallengesPage from './pages/ChallengesPage';
import ListQuiz from './pages/ListQuiz';
import KnowledeKingdomPilihanMenuPage from './pages/KnowledgeKingdomPilihanMenuPage';
import KnowledgeKingdomPage from './pages/KnowledgeKingdomPage';
import ImaginationKingdomPage from './pages/ImaginationKingdom';
import InformationPage from './pages/Information';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StudentHome/>}/>
      <Route path='/register/siswa' element={<StudentRegister/>}/>
      <Route path='/login/siswa' element={<StudentLogin/>}/>
      <Route path='/challenges' element={<ChallengesPage/>}/>
      <Route path='/knowledge' element={<KnowledeKingdomPilihanMenuPage/>}/>
      <Route path='/knowledge/:tipe' element={<KnowledgeKingdomPage/>}/>
      <Route path='/imagination' element={<ImaginationKingdomPage/>}/>
      <Route path='/information' element={<InformationPage/>}/>
      <Route path='/challenges/:id' element={<ListQuiz/>}/>
    </Routes>
    </>
  )
}

export default App
