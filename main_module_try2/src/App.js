import Foodsite from './Templates/Foodsite01';
import FS1Nav from './Templates/Foodsite01/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Foodsite />} />
      <Route path='/Navbar' element={<FS1Nav />} />
    </Routes>
  );
}

export default App;
