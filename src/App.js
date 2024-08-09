import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    </div>
  );

  
}

export default App;
