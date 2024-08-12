import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();        
  }, [])
  return ( 

      <Routes >
        <Route path='/' element={<Layout></Layout>}>
          <Route index path='/about' element={<About/>}></Route>
          <Route path='/projects' element={Projects}></Route>
          <Route path='/skills' element={Skills}></Route>
          <Route path='/contact' element={Contact}></Route>
        </Route>
      </Routes>

  );

  
}

export default App;
