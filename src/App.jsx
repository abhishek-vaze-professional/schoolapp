import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import LifeAtSGVM from './components/photoes/LifeAtSGVM';
import School from './components/school/School';
import Genesis from './components/genesis/Genesis';
import Staff from './components/staff/Staff';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Result from './components/results/Result';
import Achievement from './components/achievement/Achievement';
import ScrollButton from './components/common/ScrollButton';
import Management from './components/management/Management';

function App() {

  return (
    <>
      <div className='firstdiv'>
      <div className="fixed-width">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home /> } />
            <Route path="/photoes" element={<LifeAtSGVM />} />
            <Route path="/school" element={<School />} />
            <Route path="/genesis" element={<Genesis />}></Route>
            <Route path="/staff" element={<Staff />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/result" element={<Result />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/management" element={<Management />} />
            <Route path="*" element={ <Dashboard />} />
          </Routes>
  </BrowserRouter> 
        
      </div>
      <div className="fill-space"></div>
      <ScrollButton></ScrollButton>
      {<Footer/>}
      </div>
    </>
  )
}

export default App;
