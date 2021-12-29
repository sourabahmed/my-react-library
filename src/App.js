
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import Home from './components/NavBar/Home';
import About from './components/NavBar/About';
import Services from './components/NavBar/Services';
import Contact from './components/NavBar/Contact';


function App() {
  return (
    <div className="App">
              <BrowserRouter>
              <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
