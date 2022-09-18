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
        <Route path='html' element={<LearnHTML />}></Route>
        <Route
          path='html/:title'
          element={<TutorialContent />}
          key={window.location.pathname}
        />
      </Routes>
    </>
  );
}

export default App;
