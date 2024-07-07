import {Routes, Route} from 'react-router-dom';
import StudentHome from './pages/StudentHome';
import StudentRegister from './pages/StudentRegister';
import StudentLogin from './pages/StudentLogin';
import ChallengesPage from './pages/ChallengesPage';
import SearchChallenge from './pages/SearchChallenge';
import KnowledeKingdomPilihanMenuPage from './pages/KnowledgeKingdomPilihanMenuPage';
import KnowledgeKingdomPage from './pages/KnowledgeKingdomPage';
import ImaginationKingdomPage from './pages/ImaginationKingdom';
import InformationPage from './pages/Information';
import SearchKnowledge from './pages/SearchKnowlede';
import SearchMyArt from './pages/SearchMyArt';
import MyArtUnggah from './pages/MyArtUnggah';
import MyLiteratureUnggah from './pages/MyLiteratureUnggah';
import SearchMyLiterature from './pages/SearchMyLiterature';
import UnggahSoal from './pages/UnggahSoal';
import EditSoal from './pages/EditSoal';
import DaftarSoal from './pages/DaftarSoal';
import DaftarSiswa from './pages/DaftarSiswa';
import RingkasanHasil from './pages/RingkasanHasil';
import Abstrak from './pages/Abstrak';

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
      <Route path='/knowledge/:tipe/:mapel' element={<SearchKnowledge/>}/>
      <Route path='/imagination' element={<ImaginationKingdomPage/>}/>
      <Route path='/imagination/MyArt' element={<SearchMyArt/>}/>
      <Route path='/imagination/MyArt/unggah' element={<MyArtUnggah/>}/>
      <Route path='/imagination/MyLiterature' element={<SearchMyLiterature/>}/>
      <Route path='/imagination/MyLiterature/abstrak/:id' element={<Abstrak/>}/>
      <Route path='/imagination/MyLiterature/history' element={<MyLiteratureUnggah/>}/>
      <Route path='/information' element={<InformationPage/>}/>
      <Route path='/challenges/:mapel' element={<SearchChallenge/>}/>


      <Route path='/guru/unggahsoal' element={<UnggahSoal/>}/>
      <Route path='/guru/editsoal' element={<EditSoal/>}/>
      <Route path='/guru/daftarsoal' element={<DaftarSoal/>}/>
      <Route path='/guru/daftarsiswa' element={<DaftarSiswa/>}/>
      <Route path='/guru/ringkasanhasil' element={<RingkasanHasil/>}/>
    </Routes>
    </>
  )
}

export default App
