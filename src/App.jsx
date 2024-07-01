import {Routes, Route} from 'react-router-dom';
import StudentHome from './pages/StudentHome';
import StudentRegister from './pages/StudentRegister';
import StudentLogin from './pages/StudentLogin';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StudentHome/>}/>
      <Route path='/register/siswa' element={<StudentRegister/>}/>
      <Route path='/login/siswa' element={<StudentLogin/>}/>
    </Routes>
    </>
  )
}

export default App
