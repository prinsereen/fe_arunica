import {Routes, Route} from 'react-router-dom';
import StudentHome from './pages/StudentHome';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StudentHome/>}/>
    </Routes>
    </>
  )
}

export default App
