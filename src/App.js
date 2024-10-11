import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Inventory from './Pages/Inventory';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
 
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/inventory' element ={<Inventory />} />
        <Route path='/about' element ={<About />} />
        <Route path='/contact' element ={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
