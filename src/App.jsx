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
import ViewPdf from './pages/ViewPdf';
import Ringkasan from './pages/Ringkasan';
import DetailHistoryBacaan from './pages/DetailHistoryBacaan';
import Leaderboard from './pages/Leaderboard';
import Lomba from './pages/Lomba';
import MyReadBook from './pages/MyReadBook';
import DisplayYoutube from './pages/DisplayYoutube';
import Comic from './pages/Comic';
import GuruHome from './pages/GuruHome';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StudentHome/>}/>
      <Route path='/register/siswa' element={<StudentRegister/>}/>
      <Route path='/login/siswa' element={<StudentLogin/>}/>

      <Route path='/challenges' element={<ChallengesPage/>}/>
      <Route path='/challenges/:mapel' element={<SearchChallenge/>}/>

      <Route path='/knowledge' element={<KnowledeKingdomPilihanMenuPage/>}/>
      <Route path='/knowledge/:tipe' element={<KnowledgeKingdomPage/>}/>
      <Route path='/knowledge/:tipe/:mapel' element={<SearchKnowledge/>}/>
      <Route path='/knowledge/:tipe/:mapel/book/:id' element={<MyReadBook/>}/>
      <Route path='/knowledge/video/:id' element={<DisplayYoutube/>}/>

      <Route path='/imagination' element={<ImaginationKingdomPage/>}/>
      <Route path='/imagination/MyArt' element={<SearchMyArt/>}/>
      <Route path='/imagination/MyArt/unggah' element={<MyArtUnggah/>}/>
      <Route path='/imagination/MyLiterature' element={<SearchMyLiterature/>}/>
      <Route path='/imagination/MyLiterature/abstrak/:id' element={<Abstrak/>}/>
      <Route path='/imagination/MyLiterature/history' element={<MyLiteratureUnggah/>}/>
      <Route path='/imagination/MyLiterature/history/:id' element={<DetailHistoryBacaan/>}/>
      <Route path='/imagination/MyLiterature/book/:id' element={<ViewPdf/>}/>
      <Route path='/imagination/MyLiterature/book/ringkasan/:id' element={<Ringkasan/>}/>
      <Route path='/imagination/comic/:id' element={<Comic/>}/>

      <Route path='/information' element={<InformationPage/>}/>
      <Route path='/information/Leaderboard' element={<Leaderboard/>}/>      
      <Route path='/information/Lomba' element={<Lomba/>}/>

      <Route path='/guru/:menu/:kelas' element={<GuruHome/>}/>
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
