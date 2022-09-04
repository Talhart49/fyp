import AddHTML from './components/AddHTML';
import LearnToCode from './components/LearnToCode';
import LearnHTML from './components/LearnHTML';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<LearnToCode />} />
      <Route path='html' element={<LearnHTML />} />
    </Routes>
  );
}

export default App;
