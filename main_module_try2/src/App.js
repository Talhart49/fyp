import Foodsite from './Templates/Foodsite01';
import FS1Nav from './Templates/Foodsite01/Navbar';
import FS1 from './Templates/Foodsite01/FS1';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Foodsite />} />
      <Route path='/Navbar' element={<FS1Nav />} />
      <Route path='/FoodSite01' element={<FS1 />} />
    </Routes>
  );
}

export default App;
