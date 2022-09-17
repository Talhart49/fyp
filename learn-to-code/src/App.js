import AddHTML from './components/AddHTML';
import LearnToCode from './components/LearnToCode';
import LearnHTML from './components/LearnHTML';
import TutorialContent from './parts/TutorialContent';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<LearnToCode />} />
        <Route path='html' element={<LearnHTML />}>
          <Route path=':title' element={<TutorialContent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
