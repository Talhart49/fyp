import AddHTML from './components/AddHTML';
import LearnToCode from './components/LearnToCode';
import LearnHTML from './components/LearnHTML';
import TutorialContent from './parts/TutorialContent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LearnToCode />} />
        <Route path='/html' element={<LearnHTML />}>
          <Route path='title' element={<LearnToCode />} />
        </Route>
        {/* <Route path='html/:title-try' element={<TryYourself />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
