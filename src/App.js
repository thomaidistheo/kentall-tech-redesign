import './App.css';
import Homepage from './components/Homepage/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Preheader from './components/Header/Preheader';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ErrorPage from './ErrorPage';

function App() {

  return (
    <div className="App">


      <Router>
        <Preheader />
        <Header />

        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" elemenet={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
