import './App.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
//components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//pages
import Home from './Pages/Home/Home';
import All from './Pages/All/All';
import Marriage from './Pages/Marriage/Marriage';
import BirthDay from './Pages/BirthDay/BirthDay';
import HouseWarming from './Pages/HouseWarming/HouseWarming';
import Custom from './Pages/Custom/Custom';

// import Marriage from

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleClick = () => {
    setToggleMenu(!toggleMenu);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header toggleClick = {toggleClick}/>
      <Navbar toggleMenu = {toggleMenu}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/collections/all' element={<All/>}/>
          <Route path='/collections/marriage' element={<Marriage/>}/>
          <Route path='/collections/birth-day' element={<BirthDay/>}/>
          <Route path='/collections/house-warming' element={<HouseWarming/>}/>
          <Route path='/collections/custom' element={<Custom/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
