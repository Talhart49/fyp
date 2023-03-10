import Foodsite01 from './Templates/Foodsite01';
import FS1 from './Templates/Foodsite01/FS1';

import Portfolio01 from './Templates/Portfolio01';
import P01 from './Templates/Portfolio01/P01';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Portfolio01 />} />
      <Route path='/Portfolio01' element={<P01 />} />
    </Routes>
  );
}

export default App;
