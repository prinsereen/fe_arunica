import { Routes, Route, Navigate } from 'react-router-dom';
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
import DetailSoal from './pages/DetailSoal';
import GuruLogin from './pages/GuruLogin';
import GuruRegister from './pages/GuruRegister';
import SubMenuSoal from './pages/SubMenuSoal';
import PropTypes from 'prop-types';
import Jawaban from './pages/Jawaban';

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  //console.log("acsess token: ", accessToken)
  return accessToken ? children : <Navigate to="/login/siswa" />;
};

function App() {
  return (
    <Routes>
      <Route path="/register/siswa" element={<StudentRegister />} />
      <Route path="/login/siswa" element={<StudentLogin />} />
      <Route path="/register/guru" element={<GuruRegister />} />
      <Route path="/login/guru" element={<GuruLogin />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <StudentHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/challenges"
        element={
          <ProtectedRoute>
            <ChallengesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/challenges/:mapel"
        element={
          <ProtectedRoute>
            <SearchChallenge />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge"
        element={
          <ProtectedRoute>
            <KnowledeKingdomPilihanMenuPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge/:tipe"
        element={
          <ProtectedRoute>
            <KnowledgeKingdomPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge/:tipe/:mapel"
        element={
          <ProtectedRoute>
            <SearchKnowledge />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge/:tipe/:mapel/book/:id"
        element={
          <ProtectedRoute>
            <MyReadBook />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge/:tipe/:mapel/soal/:id"
        element={
          <ProtectedRoute>
            <DetailSoal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge/video/:id"
        element={
          <ProtectedRoute>
            <DisplayYoutube />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination"
        element={
          <ProtectedRoute>
            <ImaginationKingdomPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyArt"
        element={
          <ProtectedRoute>
            <SearchMyArt />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyArt/unggah"
        element={
          <ProtectedRoute>
            <MyArtUnggah />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyLiterature"
        element={
          <ProtectedRoute>
            <SearchMyLiterature />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyLiterature/abstrak/:id"
        element={
          <ProtectedRoute>
            <Abstrak />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyLiterature/history"
        element={
          <ProtectedRoute>
            <MyLiteratureUnggah />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyLiterature/history/:id"
        element={
          <ProtectedRoute>
            <DetailHistoryBacaan />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyLiterature/book/:id"
        element={
          <ProtectedRoute>
            <ViewPdf />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/MyLiterature/book/ringkasan/:id"
        element={
          <ProtectedRoute>
            <Ringkasan />
          </ProtectedRoute>
        }
      />
      <Route
        path="/imagination/comic/:id"
        element={
          <ProtectedRoute>
            <Comic />
          </ProtectedRoute>
        }
      />
      <Route
        path="/information"
        element={
          <ProtectedRoute>
            <InformationPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/information/Leaderboard"
        element={
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/information/Lomba"
        element={
          <ProtectedRoute>
            <Lomba />
          </ProtectedRoute>
        }
      />
      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <Jawaban/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/:menu/:kelas"
        element={
          <ProtectedRoute>
            <GuruHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/:menu/:kelas/:mapel"
        element={
          <ProtectedRoute>
            <SubMenuSoal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/unggahsoal"
        element={
          <ProtectedRoute>
            <UnggahSoal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/editsoal"
        element={
          <ProtectedRoute>
            <EditSoal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/daftarsoal"
        element={
          <ProtectedRoute>
            <DaftarSoal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/daftarsiswa"
        element={
          <ProtectedRoute>
            <DaftarSiswa />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru/ringkasanhasil"
        element={
          <ProtectedRoute>
            <RingkasanHasil />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default App;
